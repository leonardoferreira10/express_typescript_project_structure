import cluster from 'cluster';
import os from 'os';
import app from './app';
import env from './v1/config';

if (cluster.isPrimary) {
	console.log(`Master ${process.pid} is running`);

	const numCPUs = os.cpus().length;

	// Fork workers
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker) => {
		console.log(`Worker ${worker.process.pid} died`);
	});
} else {
	// Workers can share any TCP connection
	// In this case it is an HTTP server
	app.listen(env.appPort, () => {
		console.log(
			`Worker ${process.pid} started and running ${env.appHost} on port ${env.appPort}`,
		);
	});
}
