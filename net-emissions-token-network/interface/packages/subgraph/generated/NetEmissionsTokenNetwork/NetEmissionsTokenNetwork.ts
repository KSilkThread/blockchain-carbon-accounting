// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class RegisteredConsumer extends ethereum.Event {
  get params(): RegisteredConsumer__Params {
    return new RegisteredConsumer__Params(this);
  }
}

export class RegisteredConsumer__Params {
  _event: RegisteredConsumer;

  constructor(event: RegisteredConsumer) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RegisteredDealer extends ethereum.Event {
  get params(): RegisteredDealer__Params {
    return new RegisteredDealer__Params(this);
  }
}

export class RegisteredDealer__Params {
  _event: RegisteredDealer;

  constructor(event: RegisteredDealer) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class TokenCreated extends ethereum.Event {
  get params(): TokenCreated__Params {
    return new TokenCreated__Params(this);
  }
}

export class TokenCreated__Params {
  _event: TokenCreated;

  constructor(event: TokenCreated) {
    this._event = event;
  }

  get availableBalance(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get retiredBalance(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get tokenTypeId(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get issuer(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get issuee(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get fromDate(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get thruDate(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get dateCreated(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get metadata(): string {
    return this._event.parameters[9].value.toString();
  }

  get manifest(): string {
    return this._event.parameters[10].value.toString();
  }

  get description(): string {
    return this._event.parameters[11].value.toString();
  }
}

export class TokenRetired extends ethereum.Event {
  get params(): TokenRetired__Params {
    return new TokenRetired__Params(this);
  }
}

export class TokenRetired__Params {
  _event: TokenRetired;

  constructor(event: TokenRetired) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class UnregisteredConsumer extends ethereum.Event {
  get params(): UnregisteredConsumer__Params {
    return new UnregisteredConsumer__Params(this);
  }
}

export class UnregisteredConsumer__Params {
  _event: UnregisteredConsumer;

  constructor(event: UnregisteredConsumer) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class UnregisteredDealer extends ethereum.Event {
  get params(): UnregisteredDealer__Params {
    return new UnregisteredDealer__Params(this);
  }
}

export class UnregisteredDealer__Params {
  _event: UnregisteredDealer;

  constructor(event: UnregisteredDealer) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class NetEmissionsTokenNetwork__getAvailableAndRetiredResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class NetEmissionsTokenNetwork__getRolesResult {
  value0: boolean;
  value1: boolean;
  value2: boolean;
  value3: boolean;
  value4: boolean;

  constructor(
    value0: boolean,
    value1: boolean,
    value2: boolean,
    value3: boolean,
    value4: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    return map;
  }
}

export class NetEmissionsTokenNetwork__getTokenDetailsResultValue0Struct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get tokenTypeId(): i32 {
    return this[1].toI32();
  }

  get issuer(): Address {
    return this[2].toAddress();
  }

  get issuee(): Address {
    return this[3].toAddress();
  }

  get fromDate(): BigInt {
    return this[4].toBigInt();
  }

  get thruDate(): BigInt {
    return this[5].toBigInt();
  }

  get dateCreated(): BigInt {
    return this[6].toBigInt();
  }

  get metadata(): string {
    return this[7].toString();
  }

  get manifest(): string {
    return this[8].toString();
  }

  get description(): string {
    return this[9].toString();
  }
}

export class NetEmissionsTokenNetwork extends ethereum.SmartContract {
  static bind(address: Address): NetEmissionsTokenNetwork {
    return new NetEmissionsTokenNetwork("NetEmissionsTokenNetwork", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  REGISTERED_CONSUMER(): Bytes {
    let result = super.call(
      "REGISTERED_CONSUMER",
      "REGISTERED_CONSUMER():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_REGISTERED_CONSUMER(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "REGISTERED_CONSUMER",
      "REGISTERED_CONSUMER():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  REGISTERED_DEALER(): Bytes {
    let result = super.call(
      "REGISTERED_DEALER",
      "REGISTERED_DEALER():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_REGISTERED_DEALER(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "REGISTERED_DEALER",
      "REGISTERED_DEALER():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  REGISTERED_EMISSIONS_AUDITOR(): Bytes {
    let result = super.call(
      "REGISTERED_EMISSIONS_AUDITOR",
      "REGISTERED_EMISSIONS_AUDITOR():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_REGISTERED_EMISSIONS_AUDITOR(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "REGISTERED_EMISSIONS_AUDITOR",
      "REGISTERED_EMISSIONS_AUDITOR():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  REGISTERED_OFFSET_DEALER(): Bytes {
    let result = super.call(
      "REGISTERED_OFFSET_DEALER",
      "REGISTERED_OFFSET_DEALER():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_REGISTERED_OFFSET_DEALER(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "REGISTERED_OFFSET_DEALER",
      "REGISTERED_OFFSET_DEALER():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  REGISTERED_REC_DEALER(): Bytes {
    let result = super.call(
      "REGISTERED_REC_DEALER",
      "REGISTERED_REC_DEALER():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_REGISTERED_REC_DEALER(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "REGISTERED_REC_DEALER",
      "REGISTERED_REC_DEALER():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  balanceOf(account: Address, id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getAvailableAndRetired(
    account: Address,
    tokenId: BigInt
  ): NetEmissionsTokenNetwork__getAvailableAndRetiredResult {
    let result = super.call(
      "getAvailableAndRetired",
      "getAvailableAndRetired(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );

    return new NetEmissionsTokenNetwork__getAvailableAndRetiredResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getAvailableAndRetired(
    account: Address,
    tokenId: BigInt
  ): ethereum.CallResult<
    NetEmissionsTokenNetwork__getAvailableAndRetiredResult
  > {
    let result = super.tryCall(
      "getAvailableAndRetired",
      "getAvailableAndRetired(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NetEmissionsTokenNetwork__getAvailableAndRetiredResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getIssuedBy(tokenId: BigInt): Address {
    let result = super.call("getIssuedBy", "getIssuedBy(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getIssuedBy(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("getIssuedBy", "getIssuedBy(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getNumOfUniqueTokens(): BigInt {
    let result = super.call(
      "getNumOfUniqueTokens",
      "getNumOfUniqueTokens():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getNumOfUniqueTokens(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNumOfUniqueTokens",
      "getNumOfUniqueTokens():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleMember(role: Bytes, index: BigInt): Address {
    let result = super.call(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toAddress();
  }

  try_getRoleMember(role: Bytes, index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleMemberCount(role: Bytes): BigInt {
    let result = super.call(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );

    return result[0].toBigInt();
  }

  try_getRoleMemberCount(role: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoles(account: Address): NetEmissionsTokenNetwork__getRolesResult {
    let result = super.call(
      "getRoles",
      "getRoles(address):(bool,bool,bool,bool,bool)",
      [ethereum.Value.fromAddress(account)]
    );

    return new NetEmissionsTokenNetwork__getRolesResult(
      result[0].toBoolean(),
      result[1].toBoolean(),
      result[2].toBoolean(),
      result[3].toBoolean(),
      result[4].toBoolean()
    );
  }

  try_getRoles(
    account: Address
  ): ethereum.CallResult<NetEmissionsTokenNetwork__getRolesResult> {
    let result = super.tryCall(
      "getRoles",
      "getRoles(address):(bool,bool,bool,bool,bool)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NetEmissionsTokenNetwork__getRolesResult(
        value[0].toBoolean(),
        value[1].toBoolean(),
        value[2].toBoolean(),
        value[3].toBoolean(),
        value[4].toBoolean()
      )
    );
  }

  getTokenDetails(
    tokenId: BigInt
  ): NetEmissionsTokenNetwork__getTokenDetailsResultValue0Struct {
    let result = super.call(
      "getTokenDetails",
      "getTokenDetails(uint256):((uint256,uint8,address,address,uint256,uint256,uint256,uint256,string,string,string))",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toTuple() as NetEmissionsTokenNetwork__getTokenDetailsResultValue0Struct;
  }

  try_getTokenDetails(
    tokenId: BigInt
  ): ethereum.CallResult<
    NetEmissionsTokenNetwork__getTokenDetailsResultValue0Struct
  > {
    let result = super.tryCall(
      "getTokenDetails",
      "getTokenDetails(uint256):((uint256,uint8,address,address,uint256,uint256,uint256,uint256,string,string,string))",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as NetEmissionsTokenNetwork__getTokenDetailsResultValue0Struct
    );
  }

  getTokenRetiredAmount(account: Address, tokenId: BigInt): BigInt {
    let result = super.call(
      "getTokenRetiredAmount",
      "getTokenRetiredAmount(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );

    return result[0].toBigInt();
  }

  try_getTokenRetiredAmount(
    account: Address,
    tokenId: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTokenRetiredAmount",
      "getTokenRetiredAmount(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTokenType(tokenId: BigInt): string {
    let result = super.call("getTokenType", "getTokenType(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_getTokenType(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getTokenType",
      "getTokenType(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isConsumerRegistered(account: Address): boolean {
    let result = super.call(
      "isConsumerRegistered",
      "isConsumerRegistered(address):(bool)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBoolean();
  }

  try_isConsumerRegistered(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isConsumerRegistered",
      "isConsumerRegistered(address):(bool)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isDealerRegistered(account: Address): boolean {
    let result = super.call(
      "isDealerRegistered",
      "isDealerRegistered(address):(bool)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBoolean();
  }

  try_isDealerRegistered(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isDealerRegistered",
      "isDealerRegistered(address):(bool)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  uri(param0: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toString();
  }

  try_uri(param0: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get admin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class IssueCall extends ethereum.Call {
  get inputs(): IssueCall__Inputs {
    return new IssueCall__Inputs(this);
  }

  get outputs(): IssueCall__Outputs {
    return new IssueCall__Outputs(this);
  }
}

export class IssueCall__Inputs {
  _call: IssueCall;

  constructor(call: IssueCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenTypeId(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get quantity(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get fromDate(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get thruDate(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get metadata(): string {
    return this._call.inputValues[5].value.toString();
  }

  get manifest(): string {
    return this._call.inputValues[6].value.toString();
  }

  get description(): string {
    return this._call.inputValues[7].value.toString();
  }
}

export class IssueCall__Outputs {
  _call: IssueCall;

  constructor(call: IssueCall) {
    this._call = call;
  }
}

export class RegisterConsumerCall extends ethereum.Call {
  get inputs(): RegisterConsumerCall__Inputs {
    return new RegisterConsumerCall__Inputs(this);
  }

  get outputs(): RegisterConsumerCall__Outputs {
    return new RegisterConsumerCall__Outputs(this);
  }
}

export class RegisterConsumerCall__Inputs {
  _call: RegisterConsumerCall;

  constructor(call: RegisterConsumerCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RegisterConsumerCall__Outputs {
  _call: RegisterConsumerCall;

  constructor(call: RegisterConsumerCall) {
    this._call = call;
  }
}

export class RegisterDealerCall extends ethereum.Call {
  get inputs(): RegisterDealerCall__Inputs {
    return new RegisterDealerCall__Inputs(this);
  }

  get outputs(): RegisterDealerCall__Outputs {
    return new RegisterDealerCall__Outputs(this);
  }
}

export class RegisterDealerCall__Inputs {
  _call: RegisterDealerCall;

  constructor(call: RegisterDealerCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenTypeId(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class RegisterDealerCall__Outputs {
  _call: RegisterDealerCall;

  constructor(call: RegisterDealerCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RetireCall extends ethereum.Call {
  get inputs(): RetireCall__Inputs {
    return new RetireCall__Inputs(this);
  }

  get outputs(): RetireCall__Outputs {
    return new RetireCall__Outputs(this);
  }
}

export class RetireCall__Inputs {
  _call: RetireCall;

  constructor(call: RetireCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RetireCall__Outputs {
  _call: RetireCall;

  constructor(call: RetireCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }
}

export class UnregisterConsumerCall extends ethereum.Call {
  get inputs(): UnregisterConsumerCall__Inputs {
    return new UnregisterConsumerCall__Inputs(this);
  }

  get outputs(): UnregisterConsumerCall__Outputs {
    return new UnregisterConsumerCall__Outputs(this);
  }
}

export class UnregisterConsumerCall__Inputs {
  _call: UnregisterConsumerCall;

  constructor(call: UnregisterConsumerCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UnregisterConsumerCall__Outputs {
  _call: UnregisterConsumerCall;

  constructor(call: UnregisterConsumerCall) {
    this._call = call;
  }
}

export class UnregisterDealerCall extends ethereum.Call {
  get inputs(): UnregisterDealerCall__Inputs {
    return new UnregisterDealerCall__Inputs(this);
  }

  get outputs(): UnregisterDealerCall__Outputs {
    return new UnregisterDealerCall__Outputs(this);
  }
}

export class UnregisterDealerCall__Inputs {
  _call: UnregisterDealerCall;

  constructor(call: UnregisterDealerCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenTypeId(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class UnregisterDealerCall__Outputs {
  _call: UnregisterDealerCall;

  constructor(call: UnregisterDealerCall) {
    this._call = call;
  }
}
