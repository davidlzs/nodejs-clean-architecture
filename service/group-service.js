const {findOneUser, saveUser, User} = require('../models/users');
const {saveGroup, Group} = require('../models/groups');

const createGroup = async (groupData) => {
  var user = await findOneUser();
  var group = new Group(groupData);
  group.moderator = user._id;
  return saveGroup(group);
}

module.exports = {
  createGroup
}
