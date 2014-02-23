/**
 * Created by vali on 12/28/13.
 */

var Workout = require('../models/workout');

exports.index = function(req, res){
      Workout.Workout.find({}, function(err, docs){
          if (!err) {
              res.json(200, { workouts : docs});
          } else {
              res.json(500, { message : err  });
          }
      });
};


exports.create = function(req, res) {
    var workout_name = req.body.workout_name;
    var description = req.body.workout_description;

    Workout.Workout.findOne(
        { name : {$regex : new RegExp(workout_name, "i")} },
        function (err, doc) {
            if (!err && !doc) {
                var newWorkout = new Workout.Workout();

                newWorkout.name = workout_name;
                newWorkout.description = description;

                newWorkout.save(function(err){
                    if (!err) {
                        res.json(201, { message : "Workout created with name '" + newWorkout.name + "'" });
                    } else {
                        res.json(500, { message : "Could not create workout. Error " + err});
                    }
                });
            } else if (!err) {
                //  User is trying to create a workout with a name that already exists
                res.json(403, { message: "Workout with that name already exists, please update instead of create" +
                    " or create a new workout with a different name."} );
            } else {
                res.json(500, { message: err});
            }
        }
    );
}

exports.show = function(req, res) {
    var id = req.params.id;

    Workout.Workout.findById(id, function(err, doc) {
        if (!err && doc) {
            res.json(200, doc);
        } else if (err) {
            res.json(500, { message: "Error loading workout. " + err});
        } else {
            res.json(404, { message: "Workout not found."});
        }
    });
}

exports.delete = function(req, res) {
    var id = req.body.id;

    Workout.Workout.findById(id, function(err, doc) {
        if (!err && doc) {
            doc.remove();
            res.json(200, { message: "Workout removed." });
        } else if (!err) {
            res.json(404, { message: "Could not find workout." });
        } else {
            res.json(403, { message: "Could not delete workout. " + err });
        }
    });
}

exports.update = function(req, res) {
    var id = req.body.id;

    var workout_name = req.body.workout_name;
    var workout_description = req.body.workout_description;

    Workout.Workout.findById(id, function(err, doc){
        if (!err && doc ) {
            doc.name = workout_name;
            doc.description = workout_description;
            doc.save(function(err){
                if (!err) {
                    res.json(200, { message: "Workout updated: " + doc.name });
                } else {
                    res.json(500, { message: "Could not update workout. " + err });
                }
            });
        } else {
            if (!err) {
                res.json(404, { message: "Could not find workout." });
            } else {
                res.json(500, { message: "Could not update workout." + err });
            }
        }
    });
}