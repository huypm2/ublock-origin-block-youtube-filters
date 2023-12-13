const fs = require('fs');

fs.writeFileSync('./filters.txt', '');

const ublockFilters = [
	'www.youtube.com##ytd-rich-item-renderer:has(#details:has-text(//i))',
	'www.youtube.com##ytd-video-renderer:has(.yt-simple-endpoint:has-text(//i))',
	'www.youtube.com##ytd-channel-renderer:has(.yt-simple-endpoint:has-text(//i))',
	'www.youtube.com##ytd-watch-flexy:has(#text-container:has-text(//i))',
];

const allBlockTexts = fs.readFileSync('block-texts.txt', 'utf-8');

allBlockTexts.split(/\r?\n/).forEach((line) => {
	ublockFilters.forEach((filter) => {
		fs.appendFileSync('filters.txt', `${filter.replace('//', `/${line}/`)}\n`);
	});
});

console.log('DONE!');
