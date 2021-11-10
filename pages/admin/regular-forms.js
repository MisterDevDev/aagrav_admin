import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";

// @material-ui/icons
import MailOutline from "@material-ui/icons/MailOutline";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Contacts from "@material-ui/icons/Contacts";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardText from "components/Card/CardText.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/nextjs-material-dashboard-pro/views/regularFormsStyle";
import { AndroidSharp } from "@material-ui/icons";

function RegularForms() {
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [keyCount, setKeyCount] = React.useState([1]);

  const addKey = () => {
    setKeyCount([...keyCount, keyCount[keyCount.length - 1] + 1]);
  };

  const removeKey = () => {
    const poppedVal = keyCount.pop()
    setKeyCount([...keyCount])
  }

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChangeEnabled = (event) => {
    setSelectedEnabled(event.target.value);
  };
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="rose" text>
            <CardText color="rose">
              <h4 className={classes.cardTitle}>Customer Information</h4>
            </CardText>
          </CardHeader>
          <CardBody>
            <form>
              <CustomInput
                labelText="Account Id"
                id="account_id"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "id",
                }}
              />
              <CustomInput
                labelText="Restlet Url"
                id="restlet_url"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "url",
                  autoComplete: "off",
                }}
              />
              <CustomInput
                labelText="Token Id"
                id="token_id"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "id",
                  autoComplete: "off",
                }}
              />
              <CustomInput
                labelText="Token Secret"
                id="token_secret"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "id",
                  autoComplete: "off",
                }}
              />
              <Button color="rose">Submit</Button>
            </form>
          </CardBody>
        </Card>
      </GridItem>
      <div style={{width : '100%', display : 'flex', justifyContent : 'end'}}>
      {keyCount.length > 1 ? (
        <Button color="rose" onClick={removeKey}>
          {`Remove Key #${keyCount.length}`}
        </Button>
      ) : (
        ""
      )}
      </div>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="rose" text>
            <CardText color="rose">
              <h4 className={classes.cardTitle}>Consumer Keys</h4>
            </CardText>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button color="rose" onClick={addKey}>
                Add Another Key
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <form>
              {keyCount.map((key) => {
                return (
                  <div key={key}>
                    <CustomInput
                      labelText={`Consumer Key #${key}`}
                      id="consumer_key"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "id",
                      }}
                    />
                    <CustomInput
                      labelText={`Consumer Secret #${key}`}
                      id="consumer_secret"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "id",
                        autoComplete: "off",
                      }}
                    />
                    <br /> <br />
                  </div>
                );
              })}
              <Button color="rose">Submit</Button>
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

RegularForms.layout = Admin;

export default RegularForms;
