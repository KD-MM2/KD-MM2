var body = $response.body;

if ($prefs.valueForKey("regrant") == "huntroyale") {
  body =
    '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <plist version="1.0"> <dict> <key>pings</key> <array></array> <key>jingleDocType</key><string>inAppSuccess</string> <key>jingleAction</key><string>inAppRegrantPurchaseHistory</string> <key>dsid</key><string>16221907643</string> <key>download-queue-item-count</key><integer>1</integer> <key>app-list</key> <array> <dict> <key>item-id</key><integer>1538580497</integer> <key>app-item-id</key><integer>1537379121</integer> <key>version-external-identifier</key><integer>856938590</integer> <key>bid</key><string>com.hunt.royale</string> <key>bvrs</key><string>14</string> <key>offer-name</key><string>com.hunt.royale_inapp_hunterspass</string> <key>transaction-id</key><string>540001230846718</string> <key>original-transaction-id</key><string>540001230795212</string> <key>purchase-date</key><date>2023-05-28T09:52:06Z</date> <key>original-purchase-date</key><date>2023-05-28T09:52:07Z</date> <key>quantity</key><integer>1</integer> <key>receipt-data</key><data>ewoJInNpZ25hdHVyZSIgPSAiQkFCdTZsUUtqNWxiNmNzalFIWG9TY1hVMGJYQkcyb0pPeWVzYmNUaDFNb1NqaFhMdlo2bkNMT3pObzdWQytReDRVYUdCT3hXZHYza3F5R1dialFDYUtsV0ltbnhSamVkMlZiWmVZNHk1SHZ4dE5EOGgvczEzNjhFSzVtTnNTbG96VG5YUGUrdGdBWlpPSjJpaUdHTE0xbEdvbm5uUXhtR3Jjei9OTTUxNjVaZ3VzTDRIL25nWVV4c05rVUVha2YxRERHZjUzSGJCQzRkT2hRZmxzcFhOendXZVRxUUYyK1pocmRVWGRXZ09PVlR4aGhxVHFhckNCS1NQU1Y4R0RSQmcvTDEybk5Cb2RPTDNTWVZuUkJJQjZyZHRrSFd5RGVsT2FsOHdCY3p3M2R0TFpkRUhRaTB0ck9Od2VqQkhuTDhxZlhZZDJPOEMyTDVndXNnS2ltYVVLd0FBQVhLTUlJRnhqQ0NCSzZnQXdJQkFnSVFGZWVmemxKVkNtVUJmSkhmNU82eldUQU5CZ2txaGtpRzl3MEJBUXNGQURCMU1VUXdRZ1lEVlFRREREdEJjSEJzWlNCWGIzSnNaSGRwWkdVZ1JHVjJaV3h2Y0dWeUlGSmxiR0YwYVc5dWN5QkRaWEowYVdacFkyRjBhVzl1SUVGMWRHaHZjbWwwZVRFTE1Ba0dBMVVFQ3d3Q1J6VXhFekFSQmdOVkJBb01Da0Z3Y0d4bElFbHVZeTR4Q3pBSkJnTlZCQVlUQWxWVE1CNFhEVEl5TURrd01qRTVNVE0xTjFvWERUSTBNVEF3TVRFNU1UTTFObG93Z1lreE56QTFCZ05WQkFNTUxrMWhZeUJCY0hBZ1UzUnZjbVVnWVc1a0lHbFVkVzVsY3lCVGRHOXlaU0JTWldObGFYQjBJRk5wWjI1cGJtY3hMREFxQmdOVkJBc01JMEZ3Y0d4bElGZHZjbXhrZDJsa1pTQkVaWFpsYkc5d1pYSWdVbVZzWVhScGIyNXpNUk13RVFZRFZRUUtEQXBCY0hCc1pTQkpibU11TVFzd0NRWURWUVFHRXdKVlV6Q0NBU0l3RFFZSktvWklodmNOQVFFQkJRQURnZ0VQQURDQ0FRb0NnZ0VCQUx4RXpndXRhakIycjhBSkREUjZHV0h2dlNBTjlmcERuaFAxclBNOGt3N1haWnQwd2xvM0oxVHdqczFHT29MTWRiOFM0QXNwN2xocm9PZENLdmVIQUoraXpLa2k1bTNvRGVmTEQvVFFaRnV6djQxanpjS2JZckFwMTk3QW80MnRHNlQ0NjJqYmM0WXVYOHk3SVgxcnVEaHVxKzhpZzBnVDlrU2lwRWFjNVdMc2REdC9ONVNpZG1xSUlYc0VmS0hUczU3aU5XMm5qbyt3NDJYV3lETWZUbzZLQSt6cHZjd2Z0YWVHamdUd2tPKzZJWTV0a21KeXdZblFtUDdqVmNsV3hqUjAvdlFlbWtOd1lYMStoc0o1M1ZCMTNRaXc1S2kxZWpaOWwvejVTU0FkNXhKaXFHWGFQQlpZL2laUmo1RjVxejFidS9rdTB6dFNCeGd3NTM4UG1POENBd0VBQWFPQ0Fqc3dnZ0kzTUF3R0ExVWRFd0VCL3dRQ01BQXdId1lEVlIwakJCZ3dGb0FVR1l1WGpVcGJZWGhYOUtWY05SS0tPUWpqc0hVd2NBWUlLd1lCQlFVSEFRRUVaREJpTUMwR0NDc0dBUVVGQnpBQ2hpRm9kSFJ3T2k4dlkyVnlkSE11WVhCd2JHVXVZMjl0TDNkM1pISm5OUzVrWlhJd01RWUlLd1lCQlFVSE1BR0dKV2gwZEhBNkx5OXZZM053TG1Gd2NHeGxMbU52YlM5dlkzTndNRE10ZDNka2NtYzFNRFV3Z2dFZkJnTlZIU0FFZ2dFV01JSUJFakNDQVE0R0NpcUdTSWIzWTJRRkJnRXdnZjh3TndZSUt3WUJCUVVIQWdFV0syaDBkSEJ6T2k4dmQzZDNMbUZ3Y0d4bExtTnZiUzlqWlhKMGFXWnBZMkYwWldGMWRHaHZjbWwwZVM4d2djTUdDQ3NHQVFVRkJ3SUNNSUcyRElHelVtVnNhV0Z1WTJVZ2IyNGdkR2hwY3lCalpYSjBhV1pwWTJGMFpTQmllU0JoYm5rZ2NHRnlkSGtnWVhOemRXMWxjeUJoWTJObGNIUmhibU5sSUc5bUlIUm9aU0IwYUdWdUlHRndjR3hwWTJGaWJHVWdjM1JoYm1SaGNtUWdkR1Z5YlhNZ1lXNWtJR052Ym1ScGRHbHZibk1nYjJZZ2RYTmxMQ0JqWlhKMGFXWnBZMkYwWlNCd2IyeHBZM2tnWVc1a0lHTmxjblJwWm1sallYUnBiMjRnY0hKaFkzUnBZMlVnYzNSaGRHVnRaVzUwY3k0d01BWURWUjBmQkNrd0p6QWxvQ09nSVlZZmFIUjBjRG92TDJOeWJDNWhjSEJzWlM1amIyMHZkM2RrY21jMUxtTnliREFkQmdOVkhRNEVGZ1FVSXNrOGUyTVRoYjQ2TzhVenFiVDZzYkNDa3hjd0RnWURWUjBQQVFIL0JBUURBZ2VBTUJBR0NpcUdTSWIzWTJRR0N3RUVBZ1VBTUEwR0NTcUdTSWIzRFFFQkN3VUFBNElCQVFBOFJ1N1BxRHk0L1o2RHkxSHc5cWhSL09JSEhZSWszTzZTaWh2cVRhanFPMCtITXBvNU9kdGIrRnZhVFkzTit3bEtDN0hObWhsdlRzZjlhRnM3M1BsWGo1TWtTb1IwamFBa1ozYzVnamtOank5OGdZRVA3ZXRiK0hXMC9QUGVsSkc5VElVY2ZkR09aMlJJZ2dZS3NHRWt4UEJRSzFaYXJzMXV3SGVBWWM4SThxQlI1WFA1QVpFVFp6TC9NM0V6T3pCUFN6QUZmQzJ6T1d2ZkpsMnZmTGwyQnJtdUN4OWxVRlVCemFHelR6bHhCREhHU0hVVkpqOUszeXJrZ3NxT0dHWHBZTENPaHVMV1N0UnptU1N0VGhWT2JVVklhOFlEdTNjMFJwMUgxNlJvOXc5MFFFSTNlSVFvdmdJckNnNk0zbFpKbWxETkFuazdqTkE2cUsrWkhNcUIiOwoJInB1cmNoYXNlLWluZm8iID0gImV3b0pJbTl5YVdkcGJtRnNMWEIxY21Ob1lYTmxMV1JoZEdVdGNITjBJaUE5SUNJeU1ESXpMVEExTFRJNElEQXlPalV5T2pBM0lFRnRaWEpwWTJFdlRHOXpYMEZ1WjJWc1pYTWlPd29KSW5GMVlXNTBhWFI1SWlBOUlDSXhJanNLQ1NKemRXSnpZM0pwY0hScGIyNHRaM0p2ZFhBdGFXUmxiblJwWm1sbGNpSWdQU0FpTWpBM01EVTBNVGtpT3dvSkluVnVhWEYxWlMxMlpXNWtiM0l0YVdSbGJuUnBabWxsY2lJZ1BTQWlRVUpDT0VRMVFrVXRNRFk0TXkwMFJqZ3pMVUV4TkVRdE5VVTFORUk0UVVaQk9UVkJJanNLQ1NKdmNtbG5hVzVoYkMxd2RYSmphR0Z6WlMxa1lYUmxMVzF6SWlBOUlDSXhOamcxTWpZM05USTNNREF3SWpzS0NTSmxlSEJwY21WekxXUmhkR1V0Wm05eWJXRjBkR1ZrSWlBOUlDSXlNRGs1TFRBMUxUTXhJREE1T2pVeU9qQTJJRVYwWXk5SFRWUWlPd29KSW1sekxXbHVMV2x1ZEhKdkxXOW1abVZ5TFhCbGNtbHZaQ0lnUFNBaVptRnNjMlVpT3dvSkluQjFjbU5vWVhObExXUmhkR1V0YlhNaUlEMGdJakUyT0RVeU5qYzFNall3TURBaU93b0pJbVY0Y0dseVpYTXRaR0YwWlMxbWIzSnRZWFIwWldRdGNITjBJaUE5SUNJeU1EazVMVEExTFRNeElEQXlPalV5T2pBMklFRnRaWEpwWTJFdlRHOXpYMEZ1WjJWc1pYTWlPd29KSW1sekxYUnlhV0ZzTFhCbGNtbHZaQ0lnUFNBaWRISjFaU0k3Q2draWFYUmxiUzFwWkNJZ1BTQWlNVFV6T0RVNE1EUTVOeUk3Q2draWRXNXBjWFZsTFdsa1pXNTBhV1pwWlhJaUlEMGdJakF3TURBNE1ETXdMVEF3TURVMk5FVXhNREl5T1Rnd01rVWlPd29KSW05eWFXZHBibUZzTFhSeVlXNXpZV04wYVc5dUxXbGtJaUE5SUNJMU5EQXdNREV5TXpBM09UVXlNVElpT3dvSkltVjRjR2x5WlhNdFpHRjBaU0lnUFNBaU5EQTRNemt3TkRNeU5qQXdNQ0k3Q2draVlYQndMV2wwWlcwdGFXUWlJRDBnSWpFMU16Y3pOemt4TWpFaU93b0pJblJ5WVc1ellXTjBhVzl1TFdsa0lpQTlJQ0kxTkRBd01ERXlNekE0TkRZM01UZ2lPd29KSW1sdUxXRndjQzF2ZDI1bGNuTm9hWEF0ZEhsd1pTSWdQU0FpVUZWU1EwaEJVMFZFSWpzS0NTSmlkbkp6SWlBOUlDSXhOQ0k3Q2draWQyVmlMVzl5WkdWeUxXeHBibVV0YVhSbGJTMXBaQ0lnUFNBaU5UUXdNREF3TlRZMU5Ea3dNekV4SWpzS0NTSjJaWEp6YVc5dUxXVjRkR1Z5Ym1Gc0xXbGtaVzUwYVdacFpYSWlJRDBnSWpnMU5qa3pPRFU1TUNJN0Nna2lZbWxrSWlBOUlDSmpiMjB1YUhWdWRDNXliM2xoYkdVaU93b0pJbkJ5YjJSMVkzUXRhV1FpSUQwZ0ltTnZiUzVvZFc1MExuSnZlV0ZzWlY5cGJtRndjRjlvZFc1MFpYSnpjR0Z6Y3lJN0Nna2ljSFZ5WTJoaGMyVXRaR0YwWlNJZ1BTQWlNakF5TXkwd05TMHlPQ0F3T1RvMU1qb3dOaUJGZEdNdlIwMVVJanNLQ1NKd2RYSmphR0Z6WlMxa1lYUmxMWEJ6ZENJZ1BTQWlNakF5TXkwd05TMHlPQ0F3TWpvMU1qb3dOaUJCYldWeWFXTmhMMHh2YzE5QmJtZGxiR1Z6SWpzS0NTSnZjbWxuYVc1aGJDMXdkWEpqYUdGelpTMWtZWFJsSWlBOUlDSXlNREl6TFRBMUxUSTRJREE1T2pVeU9qQTNJRVYwWXk5SFRWUWlPd3A5IjsKCSJwb2QiID0gIjU0IjsKCSJzaWduaW5nLXN0YXR1cyIgPSAiMCI7Cn0=</data> </dict> </array> <key>receipt-data</key><data>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</data> </dict> </plist>';
}

$done({ body });
