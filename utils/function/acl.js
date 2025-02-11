import { ACLType, ACLExecuteType, ACLPermType } from '../type.js';

function getACLType(aclType) {
  let aclIndex = null;
  
  if (aclType === 1) {
    ACLIndex = 'user';
  } else if (aclType === 2) {
    ACLIndex = 'geoip';
  } else if (aclType === 3) {
    ACLIndex = 'aclgroup';
  } else if (ACLType === 4) {
    ACLIndex = 'ip';
  }
  
  return ACLIndex;
}

function getACLExecuteType(ACLExecuteType) {

}

function getACLPerm(perm) {
// TODO: ACL 권한 인덱스값 
}

export const ACLFunction = {
  getACLType,
  getACLExecuteType,
  getACLPerm
};
