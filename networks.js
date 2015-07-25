var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('70352205'),
  addressVersion: 0x19,
  privKeyVersion: 153,
  P2SHVersion: 85,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('000001FAEF25DEC4FBCF906E6242621DF2C183BF232F263D0BA5B101911E4563'),
    merkle_root: hex('12630D16A97F24B287C8C2594DDA5FB98C9E6C70FC61D44191931EA2AA08DC90'),
    height: 0,
    nonce: 164482,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1393221600,
    bits: 504365055,
  },
  dnsSeeds: [
    'rat4.blackcoin.co',
	'seed.blackcoin.co',
	'archon.darkfox.id.au',
	'foxy.seeds.darkfox.id.au',
	'6.syllabear.us.to',
	'bcseed.syllabear.us.to'
  ],
  defaultClientPort: 15714
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
