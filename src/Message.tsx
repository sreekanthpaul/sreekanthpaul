import { Button } from "antd";

//PascalCasing
function Message() {
  //JSX: JavaScript XML
  //const God = 'Jesus';
  //return <><h4>Hello {God} Love in Every Person -- Super</h4><div><input type="text"/></div></>;

  return (
    <>
      <div className="proper-control">
        <div className="sub-control col-6">
          <div className="col-12">
            <h3>Report Bribery Incidents Here </h3>
          </div>
          <div className="col-10">
            <label>Reporting By</label>
            <input type="text" />
          </div>
          <div className="col-2">
            <label>Age</label>
            <input type="text" />
          </div>
          <div className="col-6">
            <label>Country</label>
            <input type="text" />
          </div>
          <div className="col-6">
            <label>State / Province</label>
            <input type="text" />
          </div>
          <div className="col-6">
            <label>Mobile</label>
            <input type="text" />
          </div>
          <div className="col-6">
            <label>Email</label>
            <input type="text" />
          </div>
        </div>
        <div className="sub-control col-6">
          <div className="col-12">
            <h3>Details of the Incedent </h3>
          </div>

          <div className="col-12">
            <label>Receipient's Name</label>
            <input type="text" />
          </div>
          <div className="col-8">
            <label>Department/Company</label>
            <input type="text" />
          </div>
          <div className="col-4">
            <label>Position</label>
            <input type="text" />
          </div>
          <div>
            <label>Country</label>
            <input type="text" />
            <label>State / Province</label>
            <input type="text" />
          </div>
          <div>
            <label>Location</label>
            <input type="text" />
            <label>Amount</label>
            <input type="text" />
          </div>
          <div>
            <label>Incedent Details</label>
            <textarea placeholder="Incedent Details" />
          </div>
          <Button type="primary">Submit Report</Button>
          <h3>Validation </h3>
          <div className="row">
            <div>
              <label>Enter OPT</label>
              <input type="text" />
            </div>
            <button>Validate</button>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resend OTP
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
