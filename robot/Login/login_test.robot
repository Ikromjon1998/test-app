*** Settings ***
Library    SeleniumLibrary

Suite Setup    Open Browser    ${LOGIN_URL}    ${BROWSER}
Suite Teardown    Close Browser

*** Variables ***
${LOGIN_URL}    http://localhost/login
${BROWSER}    firefox

*** Test Cases ***
Login Test
    [Documentation]    Test logging in with valid credentials
    Open Browser    ${LOGIN_URL}    ${BROWSER}
    Input Text    id=email    test@example.com
    Input Password    id=password    password
    Click Element    xpath=//button[contains(text(), 'Log in')]
    Page Should Contain    Dashboard
