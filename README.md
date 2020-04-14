# econsult-api
The Bridge between Google Sheets and the eConsult Platform (econsult-website and econsult-prescribe)
                    
### API Implementation

Hosted in express, Fetched from local storage JSON(s) which are updated by Google Sheets API fetch and cron job using `pushthejson` for every 10 minutes

### Tables
                    
Api  | URL
------------- | -------------
links  | https://econsult-api-lovat.now.sh/links
faq  | https://econsult-api-lovat.now.sh/faq
doctors  | https://econsult-api-lovat.now.sh/doctors 
doctorsbyId  | https://econsult-api-lovat.now.sh/doctorsbyId?emailId=?
tnc  | https://econsult-api-lovat.now.sh/tnc
