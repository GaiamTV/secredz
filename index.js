'use strict'

const AWS = require('aws-sdk')
const s3 = new AWS.S3()

module.exports = function (bucket, credentialSet, callback) {
  var params = {
    Bucket: bucket,
    Key: credentialSet
  }

  s3.getObject(params, function (err, data) {
    if (err !== null) {
      callback(err, null)
    } else {
      let result = JSON.parse(data.Body.toString())
      callback(null, result)
    }
  })
}
