module.exports = {
  "plugins": {
    "istanbul": {
      "dir": "./coverage",
      "reporters": [
        "text-summary", "lcov"
      ],
      "exclude": [],
      "include": [
        "**/birch-artifact-selector.html",
        "**/birch-artifact-selector-data.html"
      ]
    }
  }
}