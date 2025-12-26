import { randomBytes } from "crypto";

/**
 * Generate a secure random token for REVALIDATION_SECRET
 *
 * This script generates a cryptographically secure random token
 * that can be used as the REVALIDATION_SECRET environment variable.
 *
 * Usage:
 *   npx tsx scripts/generate-revalidation-token.ts
 *
 * Or:
 *   node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
 */

function generateRevalidationToken(length: number = 32): string {
  // Generate random bytes and convert to base64url (URL-safe base64)
  const token = randomBytes(length).toString("base64url");
  return token;
}

// Generate multiple tokens with different lengths for options
console.log("\n=== Revalidation Token Generator ===\n");

console.log("Generated tokens (choose one):\n");

console.log("Standard (32 bytes, recommended):");
console.log(`REVALIDATION_SECRET=${generateRevalidationToken(32)}\n`);

console.log("Strong (48 bytes):");
console.log(`REVALIDATION_SECRET=${generateRevalidationToken(48)}\n`);

console.log("Maximum (64 bytes):");
console.log(`REVALIDATION_SECRET=${generateRevalidationToken(64)}\n`);

console.log("Copy one of the above lines to your .env.local file\n");

// Also generate a UUID-based token as an alternative
console.log("Alternative UUID-based token:");
const uuid = randomBytes(16).toString("hex");
const formattedUuid = `${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(12, 16)}-${uuid.slice(16, 20)}-${uuid.slice(20)}`;
console.log(`REVALIDATION_SECRET=${formattedUuid}\n`);
