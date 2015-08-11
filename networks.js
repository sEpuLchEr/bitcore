var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('70352205'),
  addressVersion: 0x3e,
  privKeyVersion: 190,
  P2SHVersion: 85,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('000005a247b397eadfefa58e872bc967c2614797bdc8d4d0e6b09fea5c191599'),
    merkle_root: hex('5109d5782a26e6a5a5eb76c7867f3e8ddae2bff026632c36afec5dc32ed8ce9f'),
    height: 0,
    nonce: 130208,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1413033777,
    bits: 504365055,
  },
  dnsSeeds: [
    'node.gridcoin.us',
    'gridcoin.asia'
  ],
  defaultClientPort: 32749
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
