import React, { useCallback } from 'react';
import usabilla from 'usabilla-react-native';
import { Button, SafeAreaView } from 'react-native';

const USABILLA_APP_ID = '1b265126-ebc2-44cf-ad9a-fd96d7e4c254';

usabilla.initialize(USABILLA_APP_ID);

const App = () => {
  const triggerCampaign = useCallback(() => {
    usabilla.sendEvent('btn_MH_event');
  }, []);
  return (
    <SafeAreaView>
      <Button title="Trigger event" onPress={() => triggerCampaign()} />
    </SafeAreaView>
  );
};
export default App;
