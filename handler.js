'use strict';

module.exports.postbackupcopy = (event) => {
  event.Records.forEach((record) => {
      const filename = record.s3.object.key;
      const filesize = record.s3.object.size;
      console.log(`New S3 backup object has been created: ${filename} (${filesize} bytes)`);
  });
};

