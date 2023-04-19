*** Settings ***
Library    SeleniumLibrary

Suite Setup    Open Browser    ${URL}    ${BROWSER}
Suite Teardown    Close Browser

*** Variables ***
${URL}    http://localhost/chirps/
${BROWSER}    firefox
${EMAIL}    test@example.com
${PASSWORD}    password

*** Test Cases ***
Test Login
    [Documentation]    Test login functionality
    [Tags]    login
    Input Text    id=email    ${EMAIL}
    Input Text    id=password    ${PASSWORD}
    Click Button    css=button[type="submit"]
    Page Should Contain    Chirps


Test Creating Chirp
    [Documentation]    Test creating chirp functionality
    [Tags]    chirp
    Input Text    name=message    Hello World!
    Click Button    xpath=//button[contains(text(), 'Chirp')]
    Page Should Contain    Hello World!

Test Deleting Chirp
    [Documentation]    Test deleting chirp functionality
    [Tags]    chirp
    Click Element    xpath=//button[@class='trigger']
    Click Element    xpath=//a[contains(text(), 'Delete')]
    Page Should Not Contain    Hello World!

Test Edit Chirp Button Redirection
    [Documentation]    Test edit chirp button redirection
    [Tags]    chirp
    Click Element    xpath=//button[@class='trigger']
    Click Element    xpath=//a[@href='http://localhost/chirps/23/edit']
    # Page shoud redirect to the 'http://localhost/chirps/23/edit' page
    Location Should Be    http://localhost/chirps/23/edit


#Test Choose Chirp Edit
#    [Tags]  Chirp
#    Go To  http://localhost/chirps/
#    Input Text    name=message    Hello Jupiter!
#    Click Button    xpath=//button[contains(text(), 'Chirp')]
#    Wait Until Page Contains    Hello Jupiter!
#    # Get the chirp id of the text "Hello Jupiter!"
#    ${chirp_id} 	Get Value  xpath=/html/body/div/main/div/div/div[1]/div/div/div[2]/div[2]/div/a/@href
#    Click Element  xpath=/html/body/div/main/div/div/div[1]/div/div/div[2]/div[1]/button/svg
#    Click Link  Edit
#    Location Should Be  ${chirp_id}
