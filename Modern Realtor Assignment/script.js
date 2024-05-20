function generatePDF() {
    const { jsPDF } = window.jspdf;

    var doc = new jsPDF();

    var formDate = document.getElementById("formDate").value;
    var buyerName = document.getElementById("buyerName").value;
    var propertyDescription = document.getElementById("propertyDescription").value;
    var propertyAddress = document.getElementById("propertyAddress").value;
    var propertyCity = document.getElementById("propertyCity").value;
    var propertyCounty = document.getElementById("propertyCounty").value;
    var propertyZip = document.getElementById("propertyZip").value;
    var assessorParcel = document.getElementById("assessorParcel").value;
    var buyerOffer = document.getElementById("buyerOffer").value;
    var escrowDate = document.getElementById("escrowDate").value;
    var disclosureBox = document.getElementById("disclosureBox").value;
    var listingAgent = document.getElementById("listingAgent").value;
    var listingExclusive = document.getElementById("listingExclusive").value;
    var listingBS = document.getElementById("listingBS").value;
    var sellingAgent = document.getElementById("sellingAgent").value;
    var sellingBuyer = document.getElementById("sellingBuyer").value;
    var sellingExclusive = document.getElementById("sellingExclusive").value;
    var sellingBS = document.getElementById("sellingBS").value;
    var competingBS = document.getElementById("competingBS").value;
    var initialDeposit = document.getElementById("initialDeposit").value;
    var electronicDD = document.getElementById("electronicDD").value;
    var cashierDD = document.getElementById("cashierDD").value;
    var personalDD = document.getElementById("personalDD").value;
    var otherDD = document.getElementById("otherDD").value;
    var alttimelineDD = document.getElementById("alttimelineDD").value;

    doc.text(20, 20, `Date Prepared: ${formDate}`);
    doc.text(20, 30, `Buyer's Name: ${buyerName}`);
    doc.text(20, 40, `Property Description: ${propertyDescription}`);
    doc.text(20, 50, `Property Address: ${propertyAddress}`);
    doc.text(20, 60, `Property City: ${propertyCity}`);
    doc.text(20, 70, `Property County: ${propertyCounty}`);
    doc.text(20, 80, `Property Zipcode: ${propertyZip}`);
    doc.text(20, 90, `Assessor Parcel No.: ${assessorParcel}`);
    doc.text(20, 100, `Buyer's Offer Price: ${buyerOffer}`);
    doc.text(20, 110, `Escrow End Date: ${escrowDate}`);
    doc.text(20, 120, `Listing Agent Name: ${listingAgent}`);
    doc.text(20, 130, `Is the Listing Agent Seller Exclusive?: ${listingExclusive}`);
    doc.text(20, 140, `Is the Listing Agent of Both Buyer and Seller?: ${listingBS}`);
    doc.text(20, 150, `Selling Agent Name: ${sellingAgent}`);
    doc.text(20, 160, `Is the Selling Agent of the Buyer: ${sellingBuyer}`);
    doc.text(20, 170, `Is the Selling Agent Exclusive: ${sellingExclusive}`);
    doc.text(20, 180, `Is the Selling Agent of Both Buyer and Seller: ${sellingBS}`);
    doc.text(20, 190, `Competing Acknowledgement: ${competingBS}`);
    doc.text(20, 200, `Initial Deposit: ${initialDeposit}`);
    doc.text(20, 210, `Electronic Direct Deposit: ${electronicDD}`);
    doc.text(20, 220, `Cashier Direct Deposit: ${cashierDD}`);
    doc.text(20, 230, `Personal Direct Deposit: ${personalDD}`);
    doc.text(20, 240, `Other Direct Deposit: ${otherDD}`);
    doc.text(20, 250, `Alternative Timeline for Direct Deposit: ${alttimelineDD}`);


    
    doc.save('CAR_RPA_Form.pdf');
}