export class HubSpotConfigurationError extends Error {
  constructor(message, details = {}) {
    super(message);
    this.name = "HubSpotConfigurationError";
    this.details = details;
  }
}

export class HubSpotSyncError extends Error {
  constructor(message, stage = "unknown", details = {}) {
    super(message);
    this.name = "HubSpotSyncError";
    this.stage = stage;
    this.details = details;
  }
}

export class RegistryIntegrityError extends Error {
  constructor(message, entity = "unknown", details = {}) {
    super(message);
    this.name = "RegistryIntegrityError";
    this.entity = entity;
    this.details = details;
  }
}
