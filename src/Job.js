import React, { useContext } from 'react';
import axios from 'axios';
import FileSaver from 'file-saver';
import HeartButton from './HeartButton';
import DeleteButton from './DeleteButton';
import { LoggedInContext } from './contexts/LoggedIn';
import './Navbar.css';

//import download from 'downloadjs'

const Job = (props) => {
  const { loggedIn, user, coverLetter } = useContext(LoggedInContext);
  //const [pdfValue, setpdfValue] = useState("");

  // const onClickHandler = async () => {
  // useEffect(() => {
  const fetchData = async () => {
    try {
      const payload = JSON.stringify({
        position: props.position,
        company: props.company,
        fileTitle: 'Ryan_Cover_Letter',
        coverLetter: coverLetter,
      });

      const fileName = 'Ryan_Cover_Letter' + props.company + '.pdf';

      const config = {
        responseType: 'blob',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        'http://localhost:1234/cover-letter',
        payload,
        config
      );
      console.log('data', data);

      //const content = config.headers['Content-Type'];
      const blob = new Blob([data], { type: 'application/pdf' });
      FileSaver.saveAs(blob, fileName);
      // download(data, 'test.pdf', content)

      //setpdfValue(data);
    } catch (err) {
      console.log(err);
    }
  };

  // }, [props]);

  //}

  return (
    <div className="col-sm-4">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{props.position}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.company}</h6>
          <p className="card-text">{props.description.substring(0, 100)}...</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              window.open(props.url, '_blank');
            }}
          >
            View Job
          </button>
        </div>
        <div className="d-flex justify-content-center">
          {loggedIn && (
            <>
              <button onClick={fetchData} className="btn btn-success mr-2">
                <i className="fas fa-envelope-open-text"></i>
              </button>
              {props.foundJobBy === 'Search' ? (
                <HeartButton
                  poster={props.poster}
                  position={props.position}
                  company={props.company}
                  url={props.url}
                  user={user._id}
                  description={props.description}
                />
              ) : (
                <DeleteButton id={props.id} />
              )}
            </>
          )}
        </div>
        <span className="mt-2">
          Found on{' '}
          <span style={{ color: 'green', paddingRight: '10px' }}>
            {props.poster}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Job;

//href={pdfValue}
