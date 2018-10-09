const data = [
  { id: 1, name: '110%', status: 'Evaluating', is_active: true, primary_source: '', is_sold_on_amazon: true, amazon_listing: 455, is_scan_amazon: false, restricted: "No", is_good_buys: false, is_scraping: false },
  { id: 2, name: '180S, Inc', status: 'Evaluating', is_active: true, primary_source: '', is_sold_on_amazon: true, amazon_listing: 227, is_scan_amazon: false, restricted: "No", is_good_buys: false, is_scraping: false },
  { id: 3, name: '2XU', status: 'Evaluating', is_active: true, primary_source: '', is_sold_on_amazon: true, amazon_listing: 455, is_scan_amazon: false, restricted: "No", is_good_buys: false, is_scraping: false },
  { id: 4, name: 'Lim', status: 'New', is_active: true, primary_source: '', is_sold_on_amazon: true, amazon_listing: 200, is_scan_amazon: false, restricted: "No", is_good_buys: false, is_scraping: false },
  { id: 5, name: 'Mankind Jeans', status: 'Evaluating', is_active: true, primary_source: '', is_sold_on_amazon: true, amazon_listing: 910, is_scan_amazon: false, restricted: "No", is_good_buys: false, is_scraping: false },
  { id: 6, name: '90 Degree By Reflex', status: 'Prospect', is_active: false, primary_source: '', is_sold_on_amazon: true, amazon_listing: 0, is_scan_amazon: false, restricted: "", is_good_buys: false, is_scraping: false },
  { id: 7, name: 'A Priori Speciality Food', status: 'Evaluating', is_active: true, primary_source: '', is_sold_on_amazon: false, amazon_listing: 0, is_scan_amazon: false, restricted: "", is_good_buys: false, is_scraping: false },
  { id: 8, name: 'Ace Camp', status: 'Evaluating', is_active: true, primary_source: 'Crux', is_sold_on_amazon: true, amazon_listing: 0, is_scan_amazon: false, restricted: "No", is_good_buys: false, is_scraping: true },
  { id: 9, name: 'Acne Studios', status: 'New', is_active: false, primary_source: '', is_sold_on_amazon: true, amazon_listing: 295, is_scan_amazon: false, restricted: "Yes", is_good_buys: false, is_scraping: false },
  { id: 10, name: 'Adidas', status: 'Prospect', is_active: true, primary_source: '', is_sold_on_amazon: true, amazon_listing: 3000, is_scan_amazon: false, restricted: "No", is_good_buys: false, is_scraping: true },
  { id: 11, name: 'Adidas 9000', status: 'Rejected', is_active: true, primary_source: 'SBS', is_sold_on_amazon: false, amazon_listing: 1000, is_scan_amazon: false, restricted: "Yes", is_good_buys: false, is_scraping: true },
  { id: 12, name: 'Adidas Golf', status: 'Rejected', is_active: true, primary_source: 'SBS', is_sold_on_amazon: false, amazon_listing: 0, is_scan_amazon: false, restricted: "Some", is_good_buys: false, is_scraping: false },
  { id: 13, name: 'Adidas Y-3', status: 'Evaluating', is_active: false, primary_source: '', is_sold_on_amazon: true, amazon_listing: 471, is_scan_amazon: false, restricted: "No", is_good_buys: false, is_scraping: false },
  { id: 14, name: 'Advanced Element', status: 'Prospect', is_active: true, primary_source: 'Toun', is_sold_on_amazon: true, amazon_listing: 0, is_scan_amazon: false, restricted: "No", is_good_buys: false, is_scraping: false },
  { id: 15, name: 'AHAVA', status: 'New', is_active: false, primary_source: '', is_sold_on_amazon: true, amazon_listing: 455, is_scan_amazon: false, restricted: "Yes", is_good_buys: false, is_scraping: false },
  { id: 16, name: 'Alegria', status: 'Evaluating', is_active: false, primary_source: '', is_sold_on_amazon: false, amazon_listing: 0, is_scan_amazon: false, restricted: "No", is_good_buys: false, is_scraping: false },
  { id: 17, name: 'Aftershokz', status: 'Prospect', is_active: false, primary_source: '', is_sold_on_amazon: true, amazon_listing: 2000, is_scan_amazon: false, restricted: "No", is_good_buys: false, is_scraping: false },
  { id: 18, name: 'Alexander Mcqueen', status: 'Rejected', is_active: true, primary_source: '', is_sold_on_amazon: true, amazon_listing: 190, is_scan_amazon: false, restricted: "Yes", is_good_buys: false, is_scraping: false },
 ];

export default data;

/*

Rejected
column
Evaluating
7 for all
If delete,
  confirm

 Export
Update Save As
Sold on Amazon Scan
Good
Restricted
Scraping
Amazon Listings Amazon
Buys
455 No
227 No
455 No
New 200 No
Evaluating 300 No
Evaluating 910 No
Prospect 0 A Priori Speciality Food Allow user
to edit in
Ace Camp
grid by
double-clicki
Acne Studios
ng on cell
Aden & Anais Evaluating 0 295 No
Rejected 0 Yes
Adidas Prospect 30000 No
Adidas 6000 Buying SBS 0 No
Adidas 9000 Buying SBS 0 No
Adidas Golf Prospect 2000 No
Adidas OC Prospect 0 No
Adidas Originals Evaluating 1000 No
Adidas Y-3 Prospect 1000 No
Advanced Element Evaluating 0 No
Aftershokz Evaluating 9 No
AG Hair Cosmetics Rejected 0 Yes
Agron Prospect 471 AHAVA Rejected 0 Yes
Alaia New 700 No
Alegria Evaluating 216 No
Alexander Mcqueen New 190 No
Alexander Wang New 140 No

* 110%
180S, Inc
2XU
Click on
pencil
and Lim
3.1 Phillip
open brands
info 3sprouts
detail
All
By status: All
View: All brands, all statuses
New
Evaluating  Active Primary Source
 Status
Prospect
Evaluating
Pursuing
Buying
Can sort or
Evaluating
No longer buying
filter on any
Rejected
column
Evaluating
7 for all Mankind Jeans
If delete,
confirm
90 Degree By Reflex
 Export
Update Save As
Sold on Amazon Scan
Good
Restricted
Scraping
Amazon Listings Amazon
Buys
455 No
227 No
455 No
New 200 No
Evaluating 300 No
Evaluating 910 No
Prospect 0 A Priori Speciality Food Allow user
to edit in
Ace Camp
grid by
double-clicki
Acne Studios
ng on cell
Aden & Anais Evaluating 0 295 No
Rejected 0 Yes
Adidas Prospect 30000 No
Adidas 6000 Buying SBS 0 No
Adidas 9000 Buying SBS 0 No
Adidas Golf Prospect 2000 No
Adidas OC Prospect 0 No
Adidas Originals Evaluating 1000 No
Adidas Y-3 Prospect 1000 No
Advanced Element Evaluating 0 No
Aftershokz Evaluating 9 No
AG Hair Cosmetics Rejected 0 Yes
Agron Prospect 471 AHAVA Rejected 0 Yes
Alaia New 700 No
Alegria Evaluating 216 No
Alexander Mcqueen New 190 No
Alexander Wang New 140 No*/
