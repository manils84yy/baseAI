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

export class NFTDeployed extends ethereum.Event {
  get params(): NFTDeployed__Params {
    return new NFTDeployed__Params(this);
  }
}

export class NFTDeployed__Params {
  _event: NFTDeployed;

  constructor(event: NFTDeployed) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NFTFactory extends ethereum.SmartContract {
  static bind(address: Address): NFTFactory {
    return new NFTFactory("NFTFactory", address);
  }

  computeAddress(_mintPrice: BigInt, owner: Address, _nounce: Bytes): Address {
    let result = super.call(
      "computeAddress",
      "computeAddress(uint256,address,bytes32):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_mintPrice),
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromFixedBytes(_nounce)
      ]
    );

    return result[0].toAddress();
  }

  try_computeAddress(
    _mintPrice: BigInt,
    owner: Address,
    _nounce: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "computeAddress",
      "computeAddress(uint256,address,bytes32):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_mintPrice),
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromFixedBytes(_nounce)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class DeployNFTCall extends ethereum.Call {
  get inputs(): DeployNFTCall__Inputs {
    return new DeployNFTCall__Inputs(this);
  }

  get outputs(): DeployNFTCall__Outputs {
    return new DeployNFTCall__Outputs(this);
  }
}

export class DeployNFTCall__Inputs {
  _call: DeployNFTCall;

  constructor(call: DeployNFTCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _mintPrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _nounce(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class DeployNFTCall__Outputs {
  _call: DeployNFTCall;

  constructor(call: DeployNFTCall) {
    this._call = call;
  }
}
