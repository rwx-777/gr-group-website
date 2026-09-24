# G&R Group website

Static site. The Docker image serves it over HTTP on port **8080**.

## Run locally

```bash
docker compose up --build
# http://localhost:8080
```

Or without Compose:

```bash
docker build -t gr-group-website .
docker run --rm -p 8080:8080 gr-group-website
```

## GitHub

[`.github/workflows/docker.yml`](../.github/workflows/docker.yml) builds the image on every pull request and, on push to `main` or `master`, pushes it to GitHub Container Registry:

- `ghcr.io/<owner>/<repo>:latest`
- `ghcr.io/<owner>/<repo>:<commit>`

The package stays private until you make it public under **Packages**. Pull it with:

```bash
docker pull ghcr.io/<owner>/<repo>:latest
docker run --rm -p 8080:8080 ghcr.io/<owner>/<repo>:latest
```
