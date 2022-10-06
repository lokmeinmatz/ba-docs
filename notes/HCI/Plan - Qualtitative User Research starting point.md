# Goal(s)

### SMART criteria for goals ( VL2.1 5:10):
**Specific**: improve workflow of users to modify dynamic resources 
**Measurable**: survery results regarding editability, confidence in changing resources etc.
**Assignable**: ? (for part 2 me & others, for part 1 not really applicable? [[Open Questions]])
**Realistic**: until start of december with base work, keep software open for extension in future!!


1. Find out about the current state of users:
- who is using the editor or manual upload/download
- how often is it used by diffrent user groups
- what are common tasks
- what are the common mistakes / problems that occur (formulate so they don't reflect mistakes on themselves with "I just need to learn more" etc)
2. Find out what ideas for improvements the users have:
- If no limits are given, what basic functionality would you expect from an editor
- Extract possible existing ideas about improvement
- Where should be the main focus during prototyping


# Participants
>ref hci.5 p261

Users of exisitng storefront editor (acc. Google Analytics, 21.9.): ca 31 per week (difficult bc. modern browsers limit recognition of recurring sessions)

-> near - saturation sampling, but too large user group and not realistic that everyone has time

"Convenience sampling" method: whoever is available (and ofc. is motivated to give input)

select through Non-probability sampling (too small user group for random prob. sampling)
Larger group for survey, smaller subgroup for interview & moderated observation

target group sizes
- interview: 6 people
- survey: 15 people

(spread as evenly as possible over identified user groups)

identified user groups:
- product developers
- project developers
- CS users / project managers
- external Customers

Test run with Felix (project dev)


Potential user groups that don't use exisitng tools yet and thus are not applicable to first survey / interview round:
- QA
- Sales

No informed conset form required , at least not for company people

## Triangulation methods used
methodological triangulation (observ, interview, survey)
Triangulation of data: diffrent people (individuals as well as user groups)

**no pilot study needed**

# Structure
total time: 30m

## Intro & explain goal an plan (< 5min)
- friendly intro, ask how the interviewee feels
- itroduce task / topic
- Inform outcome is used in bachelor thesis and thus published by the university, but anonymized
- Ask if recording is fine


## 1) Moderated observation 10-15min
Task ideas:
App: 
- https://staging.purplemanager.com/#appDetail;id=1c2ee0de-57df-47b9-aa5b-9e15f42b1a51

1. change english app menu entry "Newsstand" to "Home" on all platforms
2. Change the Banner target of the home page to https://google.com
3. Change text "Latest Issues" on home to "Read new Issues"
4. Change color of "Read new Issues" and "Latest Articles" to the app's primary color.
5. Add an Dropdown on the home between "Read new Issues" and "Latest Articles" 
	1. should show all possible publications (hint: add data source)
	2. should set publication=... in the URL (param scope)
6. text DROPDOWN_RESET should be "All Publications"

(note: android top level folder to see if people notice second platform overwrite for 1))

## 2) Semistructured Interview about improvements / wishes: 10 - 15min

Idea: after mod. obs

- Wie oft nutzt du ca. den Editor?
- Was sind so die häuftigsten Aufgaben, die du mit dem Editor ausführst?
- Beschreibe letzte Session so detailiert wie möglich (Schritt für schritt ab URL öffnen)
- Gibt es Aufgaben, für die du den "manuellen" Weg (Manager) gehst, und wenn ja warum?
- Erinnerst du dich an deine ersten Eindrücke / Erfahrungen mit dem Editor / dyn. Resourcen? Wenn ja, wie würdest du diese beschreiben? (open q)
- Wenn du dich an deine letzte Woche zurück erinnerst; gab es Probleme / Schwierigkeiten um Umgang mit dem Editor? Wenn ja welche und warum?
- > if problems occured during mod. observation, discuss why?

Phase 2: future & wishes
Open interview: Ideen über feature set


## 3) give survey to fill out on their own


eher 3/4 Fragen
Berger vorher schicken

Survey has same structure as interview:
1. current state & problems
2. future & wishes

- mix of discrete questions (5 star, y/n etc.) and free text for feedback


1. How often do you use the storefront editor per week
2. how often do you use the manager "dynamic resources" UI per week
3. (free text?) If so, why use manager UI?

Idea: first rate small units, so user has longer thought process when rating "overall"
4. How rate App selection
5. How rate intuitivity of dyn resource structure
6. how rate editing functions
7. how rate error mitigation
8. how rate overall state of dyn resource view
9. how rate changed content inspection?
10. how rate editor performance
11. how rate overall site performance
12. how rate overall

Free form: 
13. 3 most common tasks
14. 3 most common problems

future questions:
15. how important is X to you
-> to rate backlog priority


For UX improvements:
16. Do you prefer mouse-focuses working or keyboard (shortcuts)