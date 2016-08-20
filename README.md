# Bypass
Bypass Application

## Generating the new cached danger influence csv
- [Install mongodb](https://www.mongodb.com/download-center#community)
- Make sure your mongo database is up (`mongod --config /usr/local/etc/mongod.conf`)
- Seed your environment by running these 2 commands:`node scripts/seed_danger_influence_locations.js`, `node scripts/seed_danger_influence_weights.js`
- Run the script to generate/overwrite the csv: `node scripts/create_cached_danger_influences_csv.js
- Git add, commit, and push your new/updated cached csv up if desired.
