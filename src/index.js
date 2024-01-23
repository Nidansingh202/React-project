import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EmailVerification() {
  const { token } = useParams();
  const [verificationStatus, setVerificationStatus] = useState('Verifying...');

  useEffect(() => {
    // Send a request to your server to verify the token
    fetch(`/api/verify/${token}`)
      .then

((response) => response.json())
      .then((data) => {
        if (data.success) {
          setVerificationStatus('Email Verified Successfully');
        } else {
          setVerificationStatus('Email Verification Failed');
        }
      });
  }, [token]);

  return (
    <div>
      <h2>Email Verification</h2>
      <p>{verificationStatus}</p>
    </div>
  );
}

export default EmailVerification;
