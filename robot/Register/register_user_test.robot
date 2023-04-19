*** Settings ***
Library    SeleniumLibrary

Suite Setup    Open Browser    ${REGISTER_URL}    ${BROWSER}
Suite Teardown    Close Browser

*** Variables ***
${REGISTER_URL}    http://localhost/register
${BROWSER}    firefox
${EMAIL}    test@test.com
${PASSWORD}    password

*** Test Cases ***
Register Test
    [Documentation]    Test registering with valid credentials
    Wait Until Page Contains Element    id=name
    Input Text    id=name    John Doe
    Input Text    id=email    ${EMAIL}
    Input Text    id=password    ${PASSWORD}
    Input Text    id=password_confirmation    ${PASSWORD}
    Click Button    css=button[type='submit']
    Page Should Contain  You're logged in!
    Close Browser
