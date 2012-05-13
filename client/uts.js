////////// helpers //////////

var user = function () {
  return Session.get("user");
};

////////// main //////////

Template.main.user = function () {
  return Session.get("user")
};

////////// posts //////////

Template.posts.events = {
  'click input' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
};

Template.posts.posts = function () {
    return Posts.find({}, {sort: {timestamp: -1}});
};

Template.posts.events = {
  'click button' : function () {
    var text = $("#new-post").val()

    if (typeof console !== 'undefined') {
        console.log("You pressed the post button: " + text + " (" + text.length + ")");
    }

    if (text.length > 0) {
      var id = Posts.insert({author:Session.get('user'), text:text, timestamp:(new Date().getTime())});
      $('#new-post').val('');
    }
  }
};


////////// post //////////

Template.post.time = function () {
    var date = new Date();
    date.setTime(this.timestamp);
    return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
};


////////// login //////////

Template.login.events = {
  'click button' : function () {
    var name = user = $("#username-input").val()

    if (typeof console !== 'undefined') {
        console.log("You pressed the Login button: " + name + " (" + name.length + ")");
    }

    if (name.length > 0) {
        Session.set("user", name);
    }
  }
};

