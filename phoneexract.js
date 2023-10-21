var str = "+60 10-205 5722, +60 10-256 7395, +60 10-548 8824, +60 10-718 9909, +60 10-764 3305, +60 10-926 9322, +60 11-1010 8971, +60 11-1092 3463, +60 11-1105 0823, +60 11-1492 8205, +60 11-1500 5192, +60 11-1522 3508, +60 11-1624 7485, +60 11-1682 5458, +60 11-2190 5233, +60 11-2357 3019, +60 11-2517 1929, +60 11-2520 4254, +60 11-2572 4801, +60 11-2921 3583, +60 11-3588 7636, +60 11-3667 2305, +60 11-3695 1460, +60 11-3912 1519, +60 11-3980 5130, +60 11-4010 8481, +60 11-4013 9851, +60 11-4031 4827, +60 11-5322 9655, +60 11-5551 1652, +60 11-5708 5804, +60 11-6057 0464, +60 11-6211 9901, +60 11-6385 8426, +60 11-6409 8781, +60 11-6457 0017, +60 11-7071 3315, +60 11-7226 4681, +60 11-7499 4879, +60 12-217 1936, +60 12-866 0979, +60 13-312 5886, +60 13-382 3043, +60 13-387 5280, +60 13-445 3714, +60 13-504 2536, +60 13-531 3672, +60 13-553 3328, +60 13-637 7555, +60 13-711 4588, +60 13-792 8409, +60 13-869 9029, +60 14-346 7536, +60 14-354 6683, +60 14-384 2774, +60 14-602 5602, +60 14-613 0263, +60 14-635 8726, +60 14-750 7083, +60 14-753 4015, +60 14-904 9422, +60 14-957 6602, +60 14-960 4405, +60 16-225 3803, +60 16-248 3390, +60 16-313 4302, +60 16-376 5563, +60 16-407 4002, +60 16-455 1806, +60 16-695 0328, +60 16-787 8792, +60 17-234 8349, +60 17-236 6120, +60 17-272 1083, +60 17-377 4849, +60 17-404 6253, +60 17-431 8450, +60 17-457 4256, +60 17-479 5680, +60 17-574 3747, +60 17-665 2601, +60 17-766 5216, +60 17-802 3841, +60 17-837 3265, +60 18-340 0473, +60 18-358 0342, +60 18-760 9366, +60 18-874 1894, +60 19-284 0913, +60 19-306 4156, +60 19-341 8714, +60 19-410 3769, +60 19-416 9419, +60 19-418 5034, +60 19-507 6912, +60 19-525 3908, +60 19-529 2457, +60 19-574 4091, +60 19-587 5094, +60 19-603 4205, +60 19-721 0948, +60 19-768 7342, +60 19-831 1307, +60 19-877 5485, +60 19-974 3631, +60 19-992 8776, +62 812-3068-9404, +62 821-5362-8402, +62 857-6703-3072, +62 877-9276-0949, +62 881-0371-30086, +65 8504 4547, +673 725 1134, +852 9262 2217, +852 9474 1601, +852 9754 2468, +91 6239 414 038, +91 81330 09663, +91 90759 79371, +961 76 967 745, +967 777 249 463, +971 56 711 0356, You";

  function extractPhoneNumbers(inputString) {
  // Define a regular expression pattern to match phone numbers
  const phonePattern = /(\+?60\s?\d{2}-\d{3}\s?\d{4})/g;

  // Use the regular expression to find matches in the input string
  const matches = inputString.match(phonePattern);

  // Return an array of matched phone numbers
  return matches || [];
}

function cleanPhoneNumbers(phoneNumbers) {
    const cleanedNumbers = phoneNumbers.map((phoneNumber) => {
      // Use a regular expression to remove all non-digit characters
      return phoneNumber.replace(/\D/g, '');
    });
  
    return cleanedNumbers;
  }
  
  
// Example usage:
const inputString = str;
const phoneNumbers = extractPhoneNumbers(inputString);

// Example usage:
if(phoneNumbers && phoneNumbers.length > 0){
    const phoneNumbersArray = phoneNumbers;
    const cleanedNumbers = cleanPhoneNumbers(phoneNumbersArray);

    console.log(cleanedNumbers);

    // const mysql = require('mysql2');
        var mysql = require("mysql");
        var config = {
            user: 'root',
            password: 'Aa@12345',
            host: 'localhost',
            database: 'wdata',
            port: 3306
        };
        var con = mysql.createConnection({
            user: 'root',
            password: 'Aa@12345',
            host: 'localhost',
            database: 'wdata'
        });

       
   
    // Function to insert cleaned phone numbers into a MySQL table
    function insertPhoneNumbersIntoDatabase(cleanedNumbers) {
      // Replace with your MySQL connection configuration
      const connection = con;
    
      connection.connect((err) => {
        if (err) {
          console.error('Error connecting to the database: ' + err.stack);
          return;
        }
        console.log('Connected to the database');
    
        // Insert each cleaned phone number into the 'phone_numbers' table
        const insertQuery = 'INSERT INTO rawphonenumbers (number) VALUES (?)';
    
        for (const number of cleanedNumbers) {
          connection.query(insertQuery, [number], (err, results) => {
            if (err) {
              console.error('Error inserting data: ' + err.message);
            } else {
              console.log('Inserted ' + results.affectedRows + ' row into the table');
            }
          });
        }
    
        // Close the database connection
        connection.end((endErr) => {
          if (endErr) {
            console.error('Error closing the connection: ' + endErr.message);
          }
        });
      });
    }
    
    insertPhoneNumbersIntoDatabase(cleanedNumbers);

   

}