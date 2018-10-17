import React, { Component } from 'react';
import './App.css';
import { Formik } from "formik";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { TextField, Button, CardContent, CardActions, Grid, Card } from '@material-ui/core';
import * as yup from 'yup';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>        
        {/* FORMIK */}
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { resetForm, setErrors, setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 5000);
          }}
          validationSchema={
            yup.object().shape({
              email: yup.string().email().required('Required'),
              password: yup.string().min(8, 'password must be at least 8 characters').required('Your password please')
            })
          }
          render={({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={24}>
                  <Grid item lg={6} sm={12} xs={12} style={{margin:"0 auto"}}>
                    <Card className={classes.card}>
                      <CardContent>
                        <Grid container spacing={8}>
                        <Grid item xs={12}>
                        <h1>Form</h1>
                        </Grid>
                          <Grid item xs={12}>
                            <TextField
                              error={touched.email && errors.email && true}
                              label="Email"
                              value={values.email}
                              margin="normal"
                              variant="outlined"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              type="text"
                              name="email"
                              fullWidth
                              helperText={(touched.email && errors.email) ? <span>{errors.email}</span> : <span>e.g abc@apr.com</span>}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              error={touched.password && errors.password && true}
                              label="Password"
                              value={values.password}
                              margin="normal"
                              variant="outlined"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              type="password"
                              name="password"
                              fullWidth
                              helperText={(touched.password && errors.password) ? <span>{errors.password}</span> : <span>minimum 8 characters</span>}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Button disabled={isSubmitting} type="submit" variant="contained" color="primary" className={classes.button}>
                              Submit
                            </Button>
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>

              </form>
            )}
        />
        {/* END OF FORMIK */}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
