# Read from the file file.txt and output all valid phone numbers to stdout.
grep -P '^\s*(\d{3}\-|\(\d{3}\) )\d{3}\-\d{4}\s*$' file.txt
