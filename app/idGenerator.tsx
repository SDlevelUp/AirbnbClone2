import crypto from 'crypto';

function generateId(): string {
  const idBytes = crypto.randomBytes(12);
  return idBytes.toString('hex');
}

export default generateId;