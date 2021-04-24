# Prepare Code Climate Test Reporting as a Github Action

Prepares the CodeClimate Test Reporting

It looks like it's not doing anything at all. I remember it once communicated
with the server, but now that they re-implemented the reporter in Golang, the
code it invokes is practically empty... but it's still a
[documented step](https://docs.codeclimate.com/docs/configuring-test-coverage#quick-guide)
in the official documentation, so maybe they are still planning to do something
in it.

## Usage

```yaml
      - name: Prepare Code Climate Test Reporting
        uses: icalia-actions/cc-prepare-test-reporting@v0.0.1
        with:
          # Optionally debug
          debug: true
```