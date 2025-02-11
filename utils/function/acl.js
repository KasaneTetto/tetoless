import { ACLType, ACLExecuteType, ACLPermType } from '../type.js';

function getACLType(ACLType) {
  let ACLIndex = '';
  
  if(ACLType === 1) {
    ACLIndex = 'user';
  } else if(ACLType === 2) {
    ACLIndex = 'geoip';
  } else if(ACLType === 3) {
    ACLIndex = 'aclgroup';
  } else if(ACLType === 4) {
    ACLIndex = 'ip';
  } else ACLIndex = null;
  
  return ACLIndex;
}

function getACLExecuteType(ACLIndex) {
  if(ACLIndex === null) return getACLPerm(ACLExecuteType);
}

function getACLPerm(ACLExecuteType) {
  // 귀찮아
}
