import { Actions } from "./actions"
import { v4 as uuidv4 } from 'uuid';
import { FaCheckCircle, FaArrowCircleLeft } from 'react-icons/fa';
import {IoArrowBackCircleSharp} from 'react-icons/io'
import { FiCircle, FiCheckCircle, FiClock } from 'react-icons/fi'




   // Utility function to fetch data from the API
   async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    return response.json();
  }
  
  // Initialize the application state
  let tickets = [];
  let users = [];
  
  // Fetch data from the API and populate the state
  async function initializeState() {
    try {
      const data = await fetchData('https://api.quicksell.co/v1/internal/frontend-assignment');
      tickets = data.tickets;
      users = data.users;
    } catch (error) {
      console.error(error);
    }
  }
  
  // Example usage of the initialized state
  async function main() {
    await initializeState();
  
    // Now you can work with the fetched data
    console.log('Tickets:', tickets);
    console.log('Users:', users);
  }
  
  // Call the main function to start
  main();
  
    

const createInitialState = () => {
    const state = {
        selectedTicket: null,
        project: null,
        projectLanes: [],
        tickets: {}, // {'id': {...values}}
        saveTicket: {
            show: false,
            laneId: null,
            ticket: null,
        },
        searchResults: null,
    };




    const providedData = {
        "tickets":[
    
            {"id":"CAM-1","title":"Update User Profile Page UI","tag":["Feature request"],"userId":"usr-1","status":"Todo","priority":4},
            {"id":"CAM-2","title":"Add Multi-Language Support - Enable multi-language support within the application.","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":3},
            {"id":"CAM-3","title":"Optimize Database Queries for Performance","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":1},
            {"id":"CAM-4","title":"Implement Email Notification System","tag":["Feature Request"],"userId":"usr-1","status":"In progress","priority":3},
            {"id":"CAM-5","title":"Enhance Search Functionality","tag":["Feature Request"],"userId":"usr-5","status":"In progress","priority":0},
            {"id":"CAM-6","title":"Third-Party Payment Gateway","tag":["Feature Request"],"userId":"usr-2","status":"Todo","priority":1},
            {"id":"CAM-7","title":"Create Onboarding Tutorial for New Users","tag":["Feature Request"],"userId":"usr-1","status":"Backlog","priority":2},
            {"id":"CAM-8","title":"Implement Role-Based Access Control (RBAC)","tag":["Feature Request"],"userId":"usr-3","status":"In progress","priority":3},
            {"id":"CAM-9","title":"Upgrade Server Infrastructure","tag":["Feature Request"],"userId":"usr-5","status":"Todo","priority":2},
            {"id":"CAM-10","title":"Conduct Security Vulnerability Assessment","tag":["Feature Request"],"userId":"usr-4","status":"Backlog","priority":1}],
            
            "users":[
            
            {"id":"usr-1","name":"Anoop sharma","available":false},
            {"id":"usr-2","name":"Yogesh","available":true},
            {"id":"usr-3","name":"Shankar Kumar","available":true},
            {"id":"usr-4","name":"Ramesh","available":true},
            {"id":"usr-5","name":"Suresh","available":true}]
      };



      const priorityMapping = {
        0: 'No Priority',
        1: 'Low',
        2: 'Medium',
        3: 'High',
        4: 'Urgent',
      };


      const ticketsFromAPI = providedData.tickets;
      const usersFromAPI = providedData.users;

   

    const ticket1 = {
        id: ticketsFromAPI[0].id,
        tags: [...ticketsFromAPI[0].tag, ticketsFromAPI[0].id],
        title: ticketsFromAPI[0].title,
        description: ticketsFromAPI[0].id,
        priority: priorityMapping[ticketsFromAPI[0].priority],
        members: [usersFromAPI[0]],
        photo:  "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDkyNzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzYxMTQ1Mzg&ixlib=rb-4.0.3&q=80&w=400",
    };
    

    
    const ticket2 = {
        id: ticketsFromAPI[1].id,
        tags: [...ticketsFromAPI[1].tag, ticketsFromAPI[1].id],
        title: ticketsFromAPI[1].title,
        description: 'Different pages are using different font styles, making the overall design look inconsistent and unprofessional.',
        priority: priorityMapping[ticketsFromAPI[1].priority],
        members: [usersFromAPI[1]],
        photo: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDkyNzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzYxMTQ1Mzg&ixlib=rb-4.0.3&q=80&w=400"
    }
    



   
    const ticket3 = {
        id: ticketsFromAPI[2].id,
        tags: [...ticketsFromAPI[2].tag, ticketsFromAPI[2].id],
        title: ticketsFromAPI[2].title,
        description: 'The color contrast between the text and the background is not high enough, making it difficult for users to read the content',
        priority: priorityMapping[ticketsFromAPI[2].priority],
        members: [usersFromAPI[1]],
        photo: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDkyNzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzYxNzUyMDY&ixlib=rb-4.0.3&q=80&w=400"
    }

   


    
    const ticket4 = {
        id: ticketsFromAPI[3].id,
        tags: [...ticketsFromAPI[3].tag, ticketsFromAPI[3].id],
        title: ticketsFromAPI[3].title,
        description: 'There are some links within the design that are not working, leading users to dead-end pages and creating frustration.',
        priority: priorityMapping[ticketsFromAPI[3].priority],
        members: [usersFromAPI[0]],
        photo: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDkyNzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzYxMTQ1NDc&ixlib=rb-4.0.3&q=80&w=400"
    }

    const ticket5 = {
        id: ticketsFromAPI[4].id,
        tags: [...ticketsFromAPI[4].tag, ticketsFromAPI[4].id],
        title: ticketsFromAPI[4].title,
        description: 'Some buttons are appearing off-center on certain pages, causing confusion for users who are trying to interact with them.',
        priority: priorityMapping[ticketsFromAPI[4].priority],
        members: [usersFromAPI[4]],
        photo: "https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDkyNzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzYxMTQ1MjQ&ixlib=rb-4.0.3&q=80&w=400"
    };

    const ticket6 = {
        id: ticketsFromAPI[5].id,
        tags: [...ticketsFromAPI[5].tag, ticketsFromAPI[5].id],
        title: ticketsFromAPI[5].title,
        description: 'Some buttons are appearing off-center on certain pages, causing confusion for users who are trying to interact with them.',
        priority: priorityMapping[ticketsFromAPI[5].priority],
        members: [usersFromAPI[1]],
        photo: "https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDkyNzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzYxMTQ1MjQ&ixlib=rb-4.0.3&q=80&w=400"
    };

    const ticket7 = {
        id: ticketsFromAPI[6].id,
        tags: [...ticketsFromAPI[6].tag, ticketsFromAPI[6].id],
        title: ticketsFromAPI[6].title,
        description: 'Some buttons are appearing off-center on certain pages, causing confusion for users who are trying to interact with them.',
        priority: priorityMapping[ticketsFromAPI[6].priority],
        members: [usersFromAPI[0]],
        photo: "https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDkyNzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzYxMTQ1MjQ&ixlib=rb-4.0.3&q=80&w=400"
    };


    const ticket8 = {
        id: ticketsFromAPI[7].id,
        tags: [...ticketsFromAPI[7].tag, ticketsFromAPI[7].id],
        title: ticketsFromAPI[7].title,
        description: 'Some buttons are appearing off-center on certain pages, causing confusion for users who are trying to interact with them.',
        priority: priorityMapping[ticketsFromAPI[7].priority],
        members: [usersFromAPI[2]],
        photo: "https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDkyNzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzYxMTQ1MjQ&ixlib=rb-4.0.3&q=80&w=400"
    };

    const ticket9 = {
        id: ticketsFromAPI[8].id,
        tags: [...ticketsFromAPI[8].tag, ticketsFromAPI[8].id],
        title: ticketsFromAPI[8].title,
        description: 'Some buttons are appearing off-center on certain pages, causing confusion for users who are trying to interact with them.',
        priority: priorityMapping[ticketsFromAPI[8].priority],
        members: [usersFromAPI[4]],
        photo: "https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDkyNzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzYxMTQ1MjQ&ixlib=rb-4.0.3&q=80&w=400"
    };
    

    const ticket10 = {
        id: ticketsFromAPI[9].id,
        tags: [...ticketsFromAPI[9].tag, ticketsFromAPI[9].id],
        title: ticketsFromAPI[9].title,
        description: 'Some buttons are appearing off-center on certain pages, causing confusion for users who are trying to interact with them.',
        priority: priorityMapping[ticketsFromAPI[9].priority],
        members: [usersFromAPI[3]],
        photo: "https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDkyNzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzYxMTQ1MjQ&ixlib=rb-4.0.3&q=80&w=400"
    };


    state.projectLanes.push({
        id: uuidv4(),
        title: (<span>
        <FaArrowCircleLeft style={{ marginRight: '8px', marginTop: '2px' }} />
        {ticketsFromAPI[6].status}
    </span>
),  //Backlog
        ticketIds: [
            ticket7.id,
            ticket10.id,
            
        ],
    })


    state.projectLanes.push({
        id: uuidv4(),
        title: (
            <span>
                <FiCircle style={{ marginRight: '8px', marginTop: '2px' }} />
                {ticketsFromAPI[0].status}
            </span>
        ),  //Todo
        ticketIds: [
            ticket1.id,
            ticket6.id,
            ticket9.id,
        ],
    })

    state.projectLanes.push({
        id: uuidv4(),
        title: (
            <span>
                <FiClock style={{ marginRight: '8px', marginTop: '2px' }} />
                {ticketsFromAPI[1].status}
            </span>
        ),  //In progress
        ticketIds: [
            ticket2.id,
            ticket3.id,
            ticket4.id,
            ticket5.id,
            ticket8.id,
            
        ],
    })

    
    
    state.projectLanes.push({
        id: uuidv4(),
        title: (
            <span>
                <FaCheckCircle style={{ marginRight: '8px' }} />
                Done
            </span>
        ), //Done
        ticketIds: [
        ],
    })
   

    state.tickets[ticket1.id] = ticket1;
    state.tickets[ticket2.id] = ticket2;
    state.tickets[ticket3.id] = ticket3;
    state.tickets[ticket4.id] = ticket4;
    state.tickets[ticket5.id] = ticket5;
    state.tickets[ticket6.id] = ticket6;
    state.tickets[ticket7.id] = ticket7;
    state.tickets[ticket8.id] = ticket8;
    state.tickets[ticket9.id] = ticket9;
    state.tickets[ticket10.id] = ticket10;

    return state;
}

export const initialState = createInitialState()

export default (state, action) => {
    const { payload } = action;
    console.log(state);
    console.log(action);
    switch (action.type) {
        case Actions.SELECT_TICKET:
            return {
                ...state,
                saveTicket: false,
                selectedTicket: payload == null ? null : {
                    ...payload?.details,
                    lane: payload?.lane,
                },
            }
        case Actions.ADD_LANE:
            const newLane = {
                id: uuidv4(),
                title: payload,
                ticketIds: [],
            };

            return {
                ...state, projectLanes: [
                    ...state.projectLanes,
                    newLane,
                ]
            };
        case Actions.ADD_TICKET: {
            const { ticket, laneId } = payload;
            const ids = state.projectLanes.map(e => e.id);
            const index = ids.indexOf(laneId);
            if (index == -1) return state;
            const lane = state.projectLanes[index];
            const stateCopy = { ...state }
            stateCopy.tickets[ticket.id] = ticket;
            if (lane.ticketIds.includes(ticket.id)) {
                return {
                    ...state,
                    ...stateCopy,
                    selectedTicket: ticket,
                    saveTicket: {
                        show: false,
                        laneId: null,
                        ticket: null,
                    }
                }
            }
            const ticketIds = [...lane.ticketIds, ticket.id];
            stateCopy.projectLanes[index].ticketIds = ticketIds;

            return {
                ...state,
                ...stateCopy,
                saveTicket: {
                    show: false,
                    laneId: null,
                    ticket: null,
                }
            }
        }

        case Actions.SHOW_SAVE_TICKET: {
            return {
                ...state,
                selectedTicket: null,
                saveTicket: {
                    show: true,
                    laneId: payload.laneId,
                    ticket: payload?.ticket,
                }
            };
        }
        case Actions.HIDE_SAVE_TICKET: {
            return {
                ...state,
                selectedTicket: state.saveTicket?.ticket,
                saveTicket: {
                    show: false,
                    laneId: null,
                    ticket: null,
                }
            };
        }
        case Actions.UNSELECT_TICKET: {
            return {
                ...state,
                selectedTicket: null,
            }
        }
        case Actions.MOVE_TICKET:
            {
                const { prevLane, newLane, ticketId } = payload;
                if (prevLane == newLane) return state;
                const copy = [...state.projectLanes]
                const ids = state.projectLanes.map(e => e.id);
                const index = ids.indexOf(prevLane);
                var tickets = copy[index].ticketIds;
                tickets = tickets.filter(t => t != ticketId)
                copy[index].ticketIds = tickets;
                const nIndex = ids.indexOf(newLane);
                var nTickets = copy[nIndex].ticketIds;
                nTickets.push(ticketId);
                return {
                    ...state, selectedTicket: {
                        ...state.selectedTicket,
                        lane: newLane,
                    }
                }
            }
        case Actions.UPDATE_TICKET_PRIORITY: {
            const { ticketId, priority } = payload;
            const ticket = state.tickets[ticketId];
            if (ticket == null) return state;
            ticket.priority = priority
            return {
                ...state,
                tickets: {
                    ...state.tickets,
                    ticketId: ticket,
                }
            };
        }
        case Actions.SEARCH_TICKETS: {
            const { text } = payload;
            const results = {};
            if (text.length == 0) {
                return { ...state, searchResults: null }
            }
            for (const key in state.tickets) {
                const ticket = state.tickets[key];
                const containsName = ticket.title.toLowerCase().includes(text.toLowerCase());
                const containsDescription = ticket.description.toLowerCase().includes(text.toLowerCase());
                if (containsName || containsDescription) {
                    results[key] = state.tickets[key]
                }
            }
            // console.log(`Found: ${Object.keys(results).length} results`);
            return { ...state, searchResults: results };
        }
        case Actions.FILTER_PRIORITY:
            const { priority } = payload;
            const results = {};
            const source = state.tickets;
            if (priority == 'All') {
                return { ...state, searchResults: state.tickets }
            }
            for (const key in source) {
                const ticket = state.tickets[key];
                const match = ticket.priority === priority;
                if (match) {
                    results[key] = state.tickets[key]
                }
            }
            return {
                ...state,
                searchResults: results
            };
        case Actions.HIDE_EDIT_TICKET:
        case Actions.EDIT_TICKET:
            return state;
    }
}

