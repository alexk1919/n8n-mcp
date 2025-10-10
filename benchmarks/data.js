window.BENCHMARK_DATA = {
  "lastUpdate": 1760123456938,
  "repoUrl": "https://github.com/alexk1919/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "640e758c2434183ceab8cf15f5a83f637ce1a6c3",
          "message": "Merge pull request #130 from czlonkowski/feature/validation-improvements\n\n## [2.10.3] - 2025-08-07\n\n### Fixed\n- **Validation System Robustness**: Fixed multiple critical validation issues affecting AI agents and workflow validation (fixes #58, #68, #70, #73)\n  - **Issue #73**: Fixed `validate_node_minimal` crash when config is undefined\n    - Added safe property access with optional chaining (`config?.resource`)\n    - Tool now handles undefined, null, and malformed configs gracefully\n  - **Issue #58**: Fixed `validate_node_operation` crash on invalid nodeType\n    - Added type checking before calling string methods\n    - Prevents \"Cannot read properties of undefined (reading 'replace')\" error\n  - **Issue #70**: Fixed validation profile settings being ignored\n    - Extended profile parameter to all validation phases (nodes, connections, expressions)\n    - Added Sticky Notes filtering to reduce false positives\n    - Enhanced cycle detection to allow legitimate loops (SplitInBatches)\n  - **Issue #68**: Added error recovery suggestions for AI agents\n    - New `addErrorRecoverySuggestions()` method provides actionable recovery steps\n    - Categorizes errors and suggests specific fixes for each type\n    - Helps AI agents self-correct when validation fails\n\n### Added\n- **Input Validation System**: Comprehensive validation for all MCP tool inputs\n  - Created `validation-schemas.ts` with custom validation utilities\n  - No external dependencies - pure TypeScript implementation\n  - Tool-specific validation schemas for all MCP tools\n  - Clear error messages with field-level details\n- **Enhanced Cycle Detection**: Improved detection of legitimate loops vs actual cycles\n  - Recognizes SplitInBatches loop patterns as valid\n  - Reduces false positive cycle warnings\n- **Comprehensive Test Suite**: Added 16 tests covering all validation fixes\n  - Tests for crash prevention with malformed inputs\n  - Tests for profile behavior across validation phases\n  - Tests for error recovery suggestions\n  - Tests for legitimate loop patterns\n\n### Enhanced\n- **Validation Profiles**: Now consistently applied across all validation phases\n  - `minimal`: Reduces warnings for basic validation\n  - `runtime`: Standard validation for production workflows\n  - `ai-friendly`: Optimized for AI agent workflow creation\n  - `strict`: Maximum validation for critical workflows\n- **Error Messages**: More helpful and actionable for both humans and AI agents\n  - Specific recovery suggestions for common errors\n  - Clear guidance on fixing validation issues\n  - Examples of correct configurations",
          "timestamp": "2025-08-07T21:42:40+02:00",
          "tree_id": "bb62b794c3d405348ba8abac311e8d0c3c69ee62",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/640e758c2434183ceab8cf15f5a83f637ce1a6c3"
        },
        "date": 1754886850915,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0189,
            "unit": "ms",
            "range": 0.2651,
            "extra": "53005 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1718,
            "unit": "ms",
            "range": 0.6023000000000001,
            "extra": "315 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "unit": "ms",
            "range": 0.2924,
            "extra": "213995 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0665,
            "unit": "ms",
            "range": 0.36979999999999996,
            "extra": "15043 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baab3a02dc68c5d81e33f93bce0e5462d65a52d1",
          "message": "Merge pull request #139 from czlonkowski/feature/validation-improvements\n\nchore: update n8n to v1.106.3 and bump version to 2.10.4",
          "timestamp": "2025-08-12T08:57:47+02:00",
          "tree_id": "eb0e009eb0f4f9b2b57fab8bd3ab6b4442e72ccc",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/baab3a02dc68c5d81e33f93bce0e5462d65a52d1"
        },
        "date": 1755706027315,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0189,
            "unit": "ms",
            "range": 0.3886,
            "extra": "52916 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1721,
            "unit": "ms",
            "range": 0.6335999999999999,
            "extra": "315 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "unit": "ms",
            "range": 0.2513,
            "extra": "214873 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0693,
            "unit": "ms",
            "range": 0.3113,
            "extra": "14425 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29b2b1d4c13407c8cf1446c1e4124429481c052c",
          "message": "Merge pull request #303 from czlonkowski/feature/environment-aware-diagnostics\n\nfeat: Add environment-aware debugging to diagnostic tools",
          "timestamp": "2025-10-10T14:43:25+02:00",
          "tree_id": "360e6bdf0ac53bcdf5e4b29f45fda31d17cade28",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/29b2b1d4c13407c8cf1446c1e4124429481c052c"
        },
        "date": 1760123456246,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      }
    ]
  }
}