# folder-watcher-nodejs

#### These are things we do in the code above:
* import necessary module: chokidar, events, fs-extra.
* define Observer class that extends EventEmitter which can emit event (emit() method) and listen to event (on() method).
* create watcher variable using chokidar.watch() function. {persistent: true} indicates whether the process should continue to run as long as files are being watched.
* watcher.on('add') is the event listener for a file added event. In the handler, we check if the added file is error.log, read content using fsExtra.readFile(), emit 'file-added' event with the content as message, delete the file using fsExtra.unlink().
* export Observer module.
