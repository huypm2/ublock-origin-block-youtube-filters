const fs = require('fs');

fs.writeFileSync('./filters.txt', '');

const ublockFilters = [
	'www.youtube.com##ytd-app:has(#above-the-fold:has-text(//i))',
	'www.youtube.com##ytd-app:has(#inner-header-container:has-text(//i))',
	'www.youtube.com##ytd-compact-video-renderer:has-text(//i)',
	'www.youtube.com##ytd-rich-item-renderer:has-text(//i)',
	'www.youtube.com##ytd-video-renderer:has-text(//i)',
	'www.youtube.com##ytd-radio-renderer:has-text(//i)',
	'www.youtube.com###content-section:has-text(//i)',

	'www.youtube.com##app:has(.c4-tabbed-header-page-header-section:has-text(//i))',
	'www.youtube.com###ytm-media-item:has-text(//i)',
	'www.youtube.com##ytm-compact-video-renderer:has-text(//i)',
	'www.youtube.com##ytm-rich-item-renderer:has-text(//i)',
	'www.youtube.com##ytm-video-renderer:has-text(//i)',
	'www.youtube.com##ytm-radio-renderer:has-text(//i)',
	'www.youtube.com##app:has(.watch-below-the-player:has-text(//i))',
];

const allBlockTexts = fs.readFileSync('block-texts.txt', 'utf-8');

allBlockTexts.split(/\r?\n/).forEach((line) => {
	ublockFilters.forEach((filter) => {
		if (line) fs.appendFileSync('filters.txt', `${filter.replace('//', `/${line}/`)}\n`);
	});
});

console.log('DONE!');
