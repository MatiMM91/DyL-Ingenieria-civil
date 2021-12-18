import React                from 'react'
import { useState }         from 'react'
import { Typography }       from '@material-ui/core'
import { makeStyles }       from '@material-ui/core';
import { TextField }        from '@material-ui/core';
import { Button }           from '@material-ui/core';
import emailjs              from 'emailjs-com';

const Form = () => {
    const classes = useStyles();

    const [name, setName]                       = useState("")
    const [captionName, setCaptionName]         = useState("")
    const [errorName, setErrorName]             = useState(false)

    const [email, setEmail]                     = useState("")
    const [captionEmail, setCaptionEmail]       = useState("")
    const [errorEmail, setErrorEmail]           = useState(false)

    const [message, setMessage]                 = useState("")
    const [captionMessage, setCaptionMessage]   = useState("")
    const [errorMessage, setErrorMessage]       = useState(false)

    const expressions = {
        name: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[a-zA-Z0-9-.]+$/,
    }
    
    function sendEmail(e) {
        e.preventDefault();

        if(name !== '' && email !== '' && message !== '') {
            if(expressions.name.test(name) === true || expressions.email.test(email) === true) {   
                emailjs.sendForm('zohomessage', 'template_3olqvts', e.target, 
                'user_nCu4mCyckQW40rA5ksEnu')
                .then((result) => {
                    var success = document.getElementById('alert')
                    success.style.display = 'block';
                    setTimeout(() => {
                        success.style.display = 'none';
                        e.target.reset()
                        setName("");
                        setEmail("");
                        setMessage("");
                    }, 3000)
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            }
        } 
        
        if(expressions.name.test(name) === false) {
            // Expresiones de nombre incorrectos
            setErrorName(true)
            setCaptionName('El nombre solo debe contener letras')  
            setTimeout(() => {
                setErrorName(false)
                setCaptionName('')
            }, 3000)
        } 
        
        if(expressions.email.test(email) === false) {
            // Expresiones de email incorrectos
            setErrorEmail(true)
            setCaptionEmail('Debe ingresar un mail válido')  
            setTimeout(() => {
                setErrorEmail(false)
                setCaptionEmail('')
            }, 3000)
        } 
        
        if(name === '' || email === '' || message === '') {
            if(name === '') {
                setErrorName(true)
                setCaptionName('Campo Requerido')  
                setTimeout(() => {
                    setErrorName(false)
                    setCaptionName('')
                }, 3000)
            }
    
            if(email === '') {
                setErrorEmail(true)
                setCaptionEmail('Campo Requerido')
                setTimeout(() => {
                    setErrorEmail(false)
                    setCaptionEmail('')
                }, 3000)
            }
    
            if(message === '') {
                setErrorMessage(true)
                setCaptionMessage('Campo Requerido')
                setTimeout(() => {
                    setErrorMessage(false)
                    setCaptionMessage('')   
                }, 3000)
            }
        }
    }

    return (
        <div>
            <form onSubmit={sendEmail} className={classes.form} id="form_submit" noValidate autoComplete="off">
                <div className={classes.titleform}>
                    <Typography variant="h4">Contactanos</Typography>
                </div>
                <TextField
                    type="text"
                    name="name"
                    className={classes.textField}
                    label="Nombre"
                    onChange={(e)=> {
                        setName(e.target.value)
                        if (name === '') {
                            setErrorName(true)
                            setCaptionName('Campo Requerido')  
                            setTimeout(() => {
                                setErrorName(false)
                                setCaptionName('')
                            }, 3000)
                        } else {
                            setErrorName(false)
                            setCaptionName('')
                        }
                    }}
                    onBlur={(e)=> {
                        setName(e.target.value)
                        if (name === '') {
                            setErrorName(true)
                            setCaptionName('Campo Requerido')
                            setTimeout(() => {
                                setErrorName(false)
                                setCaptionName('')
                            }, 3000)
                        } else {
                            setErrorName(false)
                            setCaptionName('')
                        }
                    }}
                    onKeyUp={(e)=> {
                        setName(e.target.value)
                        if (name === '') {
                            setErrorName(true)
                            setCaptionName('Campo Requerido')
                            setTimeout(() => {
                                setErrorName(false)
                                setCaptionName('')
                            }, 3000)
                        } else {
                            setErrorName(false)
                            setCaptionName('')
                        }
                    }}
                    helperText={ captionName }
                    error={errorName}
                    />
                <TextField
                    type="email" 
                    name="email"
                    className={classes.textField}
                    label="Email"
                    onChange={(e)=> {
                        setEmail(e.target.value)
                        if (email === '') {
                            setErrorEmail(true)
                            setCaptionEmail('Campo Requerido')
                            setTimeout(() => { 
                                setErrorEmail(false)
                                setCaptionEmail('')
                            }, 3000)
                        } else {
                            setErrorEmail(false)
                            setCaptionEmail('')
                            if(expressions.email.test(e.target.value)) {
                                console.log("Hola Mundoooo")
                            }
                        }
                    }}
                    onBlur={(e)=> {
                        setEmail(e.target.value)
                        if (email === '') {
                            setErrorEmail(true)
                            setCaptionEmail('Campo Requerido')
                            setTimeout(() => {
                                setErrorEmail(false)
                                setCaptionEmail('')
                            }, 3000)
                        } else {
                            setErrorEmail(false)
                            setCaptionEmail('')
                        }
                    }}
                    onKeyUp={(e)=> {
                        setEmail(e.target.value)
                        if (email === '') {
                            setErrorEmail(true)
                            setCaptionEmail('Campo Requerido')
                            setTimeout(() => {
                                setErrorEmail(false)
                                setCaptionEmail('')
                            }, 3000)
                        } else {
                            setErrorEmail(false)
                            setCaptionEmail('')
                        }
                    }}
                    helperText={captionEmail}
                    error={errorEmail}
                    />
                <TextField
                    name="message"
                    className={classes.textField}
                    multiline
                    label="Mensaje"
                    rows={8}
                    onChange={(e)=> {
                        setMessage(e.target.value)
                        if (message === '') {
                            setErrorMessage(true)
                            setCaptionMessage('Campo Requerido')
                            setTimeout(() => {
                                setErrorMessage(false)
                                setCaptionMessage('')   
                            }, 3000)
                        } else {
                            setErrorMessage(false)
                            setCaptionMessage('')   
                        }
                    }}
                    onBlur={(e)=> {
                        setMessage(e.target.value)
                        if (message === '') {
                            setErrorMessage(true)
                            setCaptionMessage('Campo Requerido')
                            setTimeout(() => {
                                setErrorMessage(false)
                                setCaptionMessage('')   
                            }, 3000)
                        } else {
                            setErrorMessage(false)
                            setCaptionMessage('')   
                        }
                    }}
                    onKeyUp={(e)=> {
                        setMessage(e.target.value)
                        if (message === '') {
                            setErrorMessage(true)
                            setCaptionMessage('Campo Requerido')
                            setTimeout(() => {
                                setErrorMessage(false)
                                setCaptionMessage('')   
                            }, 3000)
                        } else {
                            setErrorMessage(false)
                            setCaptionMessage('')   
                        }
                    }}
                    helperText={captionMessage}
                    error={errorMessage}
                />
                <Button
                    className={classes.btn}
                    type="submit"
                    id="submit"
                >
                    Enviar
                </Button>
                <div id="alert" className={classes.success}>
                    <span>Mensaje enviado correctamente</span>
                </div>
            </form>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    textField: {
        marginTop: theme.spacing(2),
        fontSize: "1.2rem",
        width: "100%",
    },
    titleform: {
        display: "flex",
        justifyContent: "center",
    },
    message: {
        marginTop: theme.spacing(7),
        height: "60px",
    },
    btn: {
        display: "flex",
        justifyContent: "center",
        fontWeight: "800",
        marginTop: theme.spacing(4),
        margin: "0 auto",
        backgroundColor: "#e30613",
        color: "white",
        "&:hover": {
            backgroundColor: "#b10613",
        }
    },
    success: {
        display: "none",
        backgroundColor: "green",
        color: "white",
        height: "40px",
        fontWeight: "bold",
        fontSize: "1rem",
        marginTop: theme.spacing(3),
        borderRadius: "4px",
        textAlign: "center",
        paddingTop:"15px",
    },
}));

export default Form