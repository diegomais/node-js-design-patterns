class FS_Proxy {
  constructor(fs_subject) {
    this.fs = fs_subject;
  }

  readFile(path, format, callback) {
    var markdownExtensionRegex = /.md$|.MD$/;

    if (!path.match(markdownExtensionRegex)) {
      return callback(new Error(`Can only read Markdown files.`));
    }

    this.fs.readFile(path, format, (error, contents) => {
      if (error) {
        console.error(error);
        return callback(error);
      }

      return callback(null, contents);
    });
  }
}

module.exports = FS_Proxy;
