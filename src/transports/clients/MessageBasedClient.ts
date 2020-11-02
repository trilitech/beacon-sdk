import * as sodium from 'libsodium-wrappers'
import { BEACON_VERSION } from '../../constants'
import { PostMessagePairingRequest } from '../../types/PostMessagePairingRequest'
import { decryptCryptoboxPayload, encryptCryptoboxPayload } from '../../utils/crypto'
import { CommunicationClient } from './CommunicationClient'

export abstract class MessageBasedClient extends CommunicationClient {
  /**
   * The listeners that will be notified of new messages
   */
  protected abstract readonly activeListeners: Map<string, unknown> = new Map()

  constructor(
    protected readonly name: string,
    keyPair: sodium.KeyPair,
    protected readonly debug: boolean = true
  ) {
    super(keyPair)
    this.init().catch(console.error)
  }

  /**
   * start the client and make sure all dependencies are ready
   */
  public async start(): Promise<void> {
    await sodium.ready
  }

  /**
   * Get the handshake information. This will be shared with the peer during the connection setup
   */
  public async getHandshakeInfo(): Promise<PostMessagePairingRequest> {
    return {
      name: this.name,
      version: BEACON_VERSION,
      publicKey: await this.getPublicKey()
    }
  }

  /**
   * Unsubscribe from encrypted messages from a specific peer
   *
   * @param senderPublicKey
   */
  public async unsubscribeFromEncryptedMessage(senderPublicKey: string): Promise<void> {
    const listener = this.activeListeners.get(senderPublicKey)
    if (!listener) {
      return
    }

    this.activeListeners.delete(senderPublicKey)
  }

  /**
   * Unsubscribe from all encrypted messages
   */
  public async unsubscribeFromEncryptedMessages(): Promise<void> {
    this.activeListeners.clear()
  }

  /**
   * Decrypt a message from a specific peer
   *
   * @param senderPublicKey
   * @param payload
   */
  protected async decryptMessage(senderPublicKey: string, payload: string): Promise<string> {
    const { sharedRx } = await this.createCryptoBoxServer(senderPublicKey, this.keyPair.privateKey)

    const hexPayload = Buffer.from(payload, 'hex')

    if (
      hexPayload.length >=
      sodium.crypto_secretbox_NONCEBYTES + sodium.crypto_secretbox_MACBYTES
    ) {
      try {
        return await decryptCryptoboxPayload(hexPayload, sharedRx)
      } catch (decryptionError) {
        /* NO-OP. We try to decode every message, but some might not be addressed to us. */
      }
    }

    throw new Error('Could not decrypt message')
  }

  /**
   * Encrypt a message for a specific publicKey (receiver)
   *
   * @param recipientPublicKey
   * @param message
   */
  protected async encryptMessage(recipientPublicKey: string, message: string): Promise<string> {
    const { sharedTx } = await this.createCryptoBoxClient(
      recipientPublicKey,
      this.keyPair.privateKey
    )

    return encryptCryptoboxPayload(message, sharedTx)
  }

  /**
   * Initialize the connection
   */
  public abstract async init(): Promise<void>
}
