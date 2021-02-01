import React, { useContext, useState } from 'react';
import { LoggedInContext } from './contexts/LoggedIn';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import axios from 'axios';
import './Profile.css';

const ProfileSettings = () => {
  const { user, coverLetter, setCoverLetter } = useContext(LoggedInContext);

  //Convert HTML of coverLetter to type that is supported by wysiwyg
  const blocksFromHtml = htmlToDraft(coverLetter);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(
    contentBlocks,
    entityMap
  );

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(contentState)
  );

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  //convert to HTML
  const rawContentState = convertToRaw(editorState.getCurrentContent());

  const markup = draftToHtml(rawContentState);

  const saveProfile = async () => {
    const coverLetterMarkUp =
      `<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"></head><body></body>` +
      markup +
      `</body></html>`;

    try {
      const payload = JSON.stringify({
        coverLetter: coverLetterMarkUp,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        'http://localhost:1337/api/v1/auth/user/' + user.id,
        payload,
        config
      );

      setCoverLetter(data.data.updatedUser.coverLetter);
      console.log('submitted');
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    saveProfile();
  };

  return (
    <div className="Profile">
      <h2 className="username">User: {user.name}</h2>
      <div className="cover-letter-info">
        <h2>Cover Letter</h2>
        <div>
          RoboJob
          <span role="img" aria-label="Emoji">
            🤖{' '}
          </span>{' '}
          reads over your cover letter and can change certain words to match the
          job you're interested in applying for. The varibales RoboJob currently
          understands are: DATE (gets todsay's date), POSITION (gets the job
          position you generate the cover letter on), and COMPANY (get's the
          company you generate the cover letter on)
        </div>
      </div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
      {/* <EditorConvertToHTML /> */}
      <div className="button-holder">
        <button className="btn btn-lg btn-primary my-3" onClick={handleSubmit}>
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
