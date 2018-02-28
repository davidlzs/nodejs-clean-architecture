const mongoose = require('mongoose');

const Group = mongoose.model("Groups", {
  groupname: String,
  moderator: mongoose.Schema.Types.ObjectId
});

const saveGroup = (group) => {
  return new Promise((resolve, reject) => {
    group.save()
      .then((group) => {
        console.log("Group saved.");
        resolve(group);
      })
      .catch((err) =>{
        console.log("Unable to save group", err);
        reject(group);
      });
  });
}

module.exports = {
  saveGroup,
  Group
}
