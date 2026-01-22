window.BENCHMARK_DATA = {
  "lastUpdate": 1769043938718,
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
          "id": "a4ef1efaf87795bafda3e230ffb2c0b4e3fcb253",
          "message": "fix: Gracefully handle FTS5 unavailability in sql.js fallback (#398)\n\nFixed critical startup crash when server falls back to sql.js adapter\ndue to Node.js version mismatches.\n\nProblem:\n- better-sqlite3 fails to load when Node runtime version differs from build version\n- Server falls back to sql.js (pure JS, no native dependencies)\n- Database health check crashed with \"no such module: fts5\"\n- Server exits immediately, preventing Claude Desktop connection\n\nSolution:\n- Wrapped FTS5 health check in try-catch block\n- Logs warning when FTS5 not available\n- Server continues with fallback search (LIKE queries)\n- Graceful degradation: works with any Node.js version\n\nImpact:\n- Server now starts successfully with sql.js fallback\n- Works with Node v20 (Claude Desktop) even when built with Node v22\n- Clear warnings about FTS5 unavailability\n- Users can choose: sql.js (slower, works everywhere) or rebuild better-sqlite3 (faster)\n\nFiles Changed:\n- src/mcp/server.ts: Added try-catch around FTS5 health check (lines 299-317)\n\nTesting:\n- ✅ Tested with Node v20.17.0 (Claude Desktop)\n- ✅ Tested with Node v22.17.0 (build version)\n- ✅ All 6 startup checkpoints pass\n- ✅ Database health check passes with warning\n\nFixes: Claude Desktop connection failures with Node.js version mismatches\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en",
          "timestamp": "2025-11-04T16:14:16+01:00",
          "tree_id": "dacb97a77111098208d181d2b2726235819bd78a",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/a4ef1efaf87795bafda3e230ffb2c0b4e3fcb253"
        },
        "date": 1762355657269,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6d0b07e30daba4a32b6973fc101f430bc708a51",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2025-11-12T05:21:49-08:00",
          "tree_id": "6af13ddbef52a4b96f5dbc10b9abc0ecb3e9b3b4",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/d6d0b07e30daba4a32b6973fc101f430bc708a51"
        },
        "date": 1762953830052,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ed45f78e68888155a96c255c61b6cc5601c0fba",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2025-11-20T08:36:21-08:00",
          "tree_id": "a27b3da53da60f0beb0cffe89022d2869f1079a7",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/6ed45f78e68888155a96c255c61b6cc5601c0fba"
        },
        "date": 1763656695962,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "130cf68a4f01300e51ac955e8f730bee21b9b45d",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2025-11-24T08:16:18-08:00",
          "tree_id": "ef341cd402bec66503c3105b44c7135f37ebaf1b",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/130cf68a4f01300e51ac955e8f730bee21b9b45d"
        },
        "date": 1764001099563,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba3756bedd4b0e88697ec6d8fc7183752ea1f44c",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2025-12-01T01:32:30-08:00",
          "tree_id": "7e9cb970517e2996277e275f05c102d82f14b77c",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/ba3756bedd4b0e88697ec6d8fc7183752ea1f44c"
        },
        "date": 1764581665857,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "179737a1b8f3e86d4c66bf4d880131f839a643c2",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2025-12-02T12:20:59-08:00",
          "tree_id": "c8077d39b907eeca689b8f04954302924b43bc06",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/179737a1b8f3e86d4c66bf4d880131f839a643c2"
        },
        "date": 1764706973238,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2e37faeb48055ccb3f32275eb66252b7b9d5454",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2025-12-02T21:55:02-08:00",
          "tree_id": "475ba9fd9a35b329bd1408b86bc6e0cd97e12000",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/e2e37faeb48055ccb3f32275eb66252b7b9d5454"
        },
        "date": 1764741430019,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5710119f07c55a11ef773a44c9bd765a76b5f2c4",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2025-12-08T11:06:55-05:00",
          "tree_id": "ddda0099f8ef1cd16f69448ea15cc77f3f45f4b4",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/5710119f07c55a11ef773a44c9bd765a76b5f2c4"
        },
        "date": 1765210132362,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6a9794f24bf85481cdb9be1f80720d1a7fe0335",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2025-12-09T21:51:16-05:00",
          "tree_id": "2e28cae88bdbb1e73edbda241dcdde196a523054",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/e6a9794f24bf85481cdb9be1f80720d1a7fe0335"
        },
        "date": 1765335186222,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97da1a9bb514e79d335163bb2c6f19eda01f3d5b",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2025-12-12T11:44:58-08:00",
          "tree_id": "6e1b4c90482b87ecbbe571ac0dc9edb1ab56a504",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/97da1a9bb514e79d335163bb2c6f19eda01f3d5b"
        },
        "date": 1765568791156,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61e4377e9b0a2955091b08aa7938b9e6c8994930",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2025-12-16T23:45:41-08:00",
          "tree_id": "8362351992dcf2ca17e7b2ca22691b6235093ce0",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/61e4377e9b0a2955091b08aa7938b9e6c8994930"
        },
        "date": 1765957668362,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "01e3b44160aaedd6b8a0c5f6798c8e5e1bd44e03",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2025-12-20T11:17:01-08:00",
          "tree_id": "1aa4ff5d103c616b6f357d5759fe35e56089bc09",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/01e3b44160aaedd6b8a0c5f6798c8e5e1bd44e03"
        },
        "date": 1766258339312,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66b77d8000184050d7d33b714c8eec2d0b3c1ec9",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2025-12-26T09:15:30-08:00",
          "tree_id": "6bf84ea1b746232e3673ae1717aca278e511cd99",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/66b77d8000184050d7d33b714c8eec2d0b3c1ec9"
        },
        "date": 1766769446141,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "216023264e6c01d62fb3ce80cf934f984a752ff6",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2026-01-05T20:41:54-08:00",
          "tree_id": "066c6eab5940e0aa51f8de7cd0d1b80eddd013e7",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/216023264e6c01d62fb3ce80cf934f984a752ff6"
        },
        "date": 1767674635856,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "895b95cb724ad2c480effa4d02401fac9061314d",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2026-01-06T15:19:41-05:00",
          "tree_id": "a2afd7d831c80f572906837d5e1a4e1525290e9e",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/895b95cb724ad2c480effa4d02401fac9061314d"
        },
        "date": 1767730911346,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c705549b748b02c8317c9968742ed8a2349e61a6",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2026-01-09T14:48:45-05:00",
          "tree_id": "9e85d7332aa22f6543b32fbaabef68b257ccbd30",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/c705549b748b02c8317c9968742ed8a2349e61a6"
        },
        "date": 1767988239124,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2e3c5dbd194db9f6376b14108629ae7d1011150",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2026-01-12T20:39:25-05:00",
          "tree_id": "817fa23e52152aed910da255a230cf24132d3098",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/e2e3c5dbd194db9f6376b14108629ae7d1011150"
        },
        "date": 1768268480601,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71125dccac5fd2513b9f25b6efeee3ba462de7a4",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2026-01-16T15:29:25-05:00",
          "tree_id": "da818820e5480bcf7dc1103bf86db53a9d8ce733",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/71125dccac5fd2513b9f25b6efeee3ba462de7a4"
        },
        "date": 1768595477597,
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
      },
      {
        "commit": {
          "author": {
            "email": "54913409+alexk1919@users.noreply.github.com",
            "name": "Alex Kim",
            "username": "alexk1919"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "466c0488d5966f9ae3cc7e17660632b580d82757",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2026-01-21T20:03:03-05:00",
          "tree_id": "dd41684314d9986f87675d0c89c29deb6d1c03d8",
          "url": "https://github.com/alexk1919/n8n-mcp/commit/466c0488d5966f9ae3cc7e17660632b580d82757"
        },
        "date": 1769043938352,
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