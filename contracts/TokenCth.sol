pragma solidity ^0.8.0;

import './TokenBase.sol';

contract TokenCth is TokenBase {
  constructor() TokenBase('CTH Token', 'CTK') {}
}
