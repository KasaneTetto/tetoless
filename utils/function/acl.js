// 난 내가 무슨 코드를 싸는지 전혀 모르겠다

function getACLtype(x) {
  let ACLIndex = null;
  
  if (x === 1) {
    ACLIndex = 'user';
  } else if (x === 2) {
    ACLIndex = 'geoip';
  } else if (x === 3) {
    ACLIndex = 'aclgroup';
  } else if (x === 4) {
    ACLIndex = 'ip';
  }
  
  return ACLIndex;
}

function getACLexecuteType(x) {
  let executeACL = 'allow';

  if (x === 1) {
    executeACL = 'deny';
  } else if (x === 2) {
    executeACL = 'gotons';
  }

  return executeACL
}

function getACLPerm(x) {
  let output = '';

  return output
}

export const ACLFunction = {
  getACLtype,
  getACLexecuteType,
  getACLPerm
};
