# 😎 Doclog 😎

### Description

This project helps me to understand Docker. This small program
saves the system time to a log file at a configurable interval.
Also stores the name of the user who launched it.

### Prerequisites

You need an installed [Docker] and [Docker Compose] plugin.

### Configure

In the `app/config.yml` file, you can configure the output delay in seconds

```yml
delay: 1.5
```

You can also change the delay in the configuration file
while the program is running.

### Build && Run

To build, use the command:
```sh
docker compose build
```

To run, use the command:
```sh
docker compose up
```

### Log Messages

Log Messages can be found in `app/output/date.log`.

[Docker]: https://www.docker.com/
[Docker Compose]: https://docs.docker.com/compose/
