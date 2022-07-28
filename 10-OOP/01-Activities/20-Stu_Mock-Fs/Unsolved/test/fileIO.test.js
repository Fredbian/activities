const FileIO = require('../fileIO');
const fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');

describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Your code here
      const fileIO = new FileIO()
      const file = "message.txt"
      let data

      fs.readFile.mockReturnValue('Hello World!')
      data = fileIO.read(file)

      expect(data).toEqual('Hello World!')

    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
      const fileIO = new FileIO()
      const message = "Goodbye World!"
      fileIO.prototype.write.mockReturnValue(
        new Promise(function(resolve) {
          resolve({message})
        })
      )
    });
  });
});
