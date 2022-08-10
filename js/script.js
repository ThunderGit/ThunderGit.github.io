let prevHref = (item, index, array) => {
	index = (index !== 0) ? (index - 1) : (array.length-1);
	item.attr(`href`, array[index]);
	item.attr(`download`, array[index]);
	
	return index;
};
let nextHref  = (item, index, array) => {
	index = (index !== array.length-1) ? (index + 1) : 0;
	item.attr(`href`, array[index]);
	item.attr(`download`, array[index]);

	return index;
};

const prods=[
	`images/ck_dieticheskay_dobavka_lecitin.pdf`,
	`images/ck_50_rastvor_etiloviy_spirt.pdf`,
	`images/ck_50_rastvor_izopropiloviy_spirt.pdf`,
	`images/ck_oliya_koncentrata.pdf`,
	`images/ck_kormovay_dobavka_lecitin.pdf`,
	`images/ck_lecitin.pdf`,
	``
];
const certs=[
	`images/Kosher_certificate_2023.jpg`,
	`images/ISO_22000_2018_2021.jpg`,
	`images/tech_umovy1str.jpg`,
	`images/tech_umovy1str_fosfat.jpg`,
	`images/tech_umovy1str_oliya.jpg`
];

let prodIndex=0,
	certsIndex=0;

$(`.left1`).click(()=>{
	prodIndex = prevHref($('.item-info .item-title'), prodIndex, prods);
});

$(`.right1`).click(()=>{
	prodIndex = nextHref($('.item-info .item-title'), prodIndex, prods);
});

$(`.left3`).click(()=>{
	certsIndex = prevHref($('.item-watch .item-title'), certsIndex, certs);
});

$(`.right3`).click(()=>{
	certsIndex = nextHref($('.item-watch .item-title'), certsIndex, certs);
});

const setLanguage = selectedLang => loadXML(selectedLang);

const loadXML = (lang) => {

	const xhttp = new XMLHttpRequest();
		xhttp.onload = function() {
		getXML(this);
	}
  
	xhttp.open(`GET`, `./lang/lang-${lang}.xml`);
	xhttp.send();
};
const getXML = xml => {

	const bodyXML = xml.responseXML.getElementsByClassName(`body`)[0];	
	console.log(bodyXML);
	$(`.body`).html(bodyXML.innerHTML);
};
