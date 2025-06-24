import React, { useState } from 'react';
import { Search, ChevronDown, ArrowRight, Briefcase, GraduationCap, Heart } from 'lucide-react';

const App = () => {

  // Function to generate random template images
  const getTemplateType = (index) => {
    const types = ['dashboard', 'planner', 'tracker', 'journal', 'goals', 'default'];
    return types[index % types.length];
  };

  // Function to create template mockup with random colors
  const createTemplateMockup = (index, type = 'default') => {
    const templates = {
      default: {
        colors: ['#f3f4f6', '#e5e7eb', '#d1d5db'],
        layout: 'document'
      },
      dashboard: {
        colors: ['#dbeafe', '#93c5fd', '#3b82f6'],
        layout: 'dashboard'
      },
      planner: {
        colors: ['#d1fae5', '#86efac', '#10b981'],
        layout: 'calendar'
      },
      tracker: {
        colors: ['#fef3c7', '#fde68a', '#f59e0b'],
        layout: 'table'
      },
      journal: {
        colors: ['#fce7f3', '#f9a8d4', '#ec4899'],
        layout: 'journal'
      },
      goals: {
        colors: ['#e0e7ff', '#c7d2fe', '#6366f1'],
        layout: 'kanban'
      }
    };

    const templateTypes = Object.keys(templates);
    const templateType = templates[templateTypes[index % templateTypes.length]];
    const colors = templateType.colors;
    
    if (templateType.layout === 'dashboard') {
      return (
        <div style={{
          width: '60%',
          height: '60%',
          backgroundColor: colors[0],
          padding: '2px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}>
          {/* Dashboard header */}
          <div style={{
            width: '100%',
            height: '16px',
            backgroundColor: colors[1],
            borderRadius: '2px',
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
            padding: '2px'
          }}>
            <div style={{ width: '8px', height: '8px', backgroundColor: colors[2], borderRadius: '50%' }}></div>
            <div style={{ width: '40%', height: '4px', backgroundColor: colors[2], borderRadius: '1px' }}></div>
          </div>
          {/* Dashboard widgets */}
          <div style={{ display: 'flex', gap: '4px', height: '60%' }}>
            <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '2px', padding: '4px' }}>
              <div style={{ width: '100%', height: '6px', backgroundColor: colors[1], borderRadius: '1px', marginBottom: '2px' }}></div>
              <div style={{ width: '80%', height: '4px', backgroundColor: colors[0], borderRadius: '1px', marginBottom: '1px' }}></div>
              <div style={{ width: '60%', height: '4px', backgroundColor: colors[0], borderRadius: '1px' }}></div>
            </div>
            <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '2px', padding: '4px' }}>
              <div style={{ width: '100%', height: '6px', backgroundColor: colors[1], borderRadius: '1px', marginBottom: '2px' }}></div>
              <div style={{ width: '90%', height: '20px', backgroundColor: colors[0], borderRadius: '1px' }}></div>
            </div>
          </div>
          {/* Bottom section */}
          <div style={{ height: '20%', backgroundColor: 'white', borderRadius: '2px', padding: '4px' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              <div style={{ width: '20px', height: '8px', backgroundColor: colors[1], borderRadius: '1px' }}></div>
              <div style={{ width: '20px', height: '8px', backgroundColor: colors[0], borderRadius: '1px' }}></div>
              <div style={{ width: '20px', height: '8px', backgroundColor: colors[0], borderRadius: '1px' }}></div>
            </div>
          </div>
        </div>
      );
    }

    if (templateType.layout === 'table') {
      return (
        <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          padding: '6px',
          borderRadius: '4px'
        }}>
          {/* Table header */}
          <div style={{
            display: 'flex',
            gap: '2px',
            marginBottom: '4px',
            padding: '2px',
            backgroundColor: colors[0],
            borderRadius: '2px'
          }}>
            <div style={{ width: '30%', height: '6px', backgroundColor: colors[1], borderRadius: '1px' }}></div>
            <div style={{ width: '25%', height: '6px', backgroundColor: colors[1], borderRadius: '1px' }}></div>
            <div style={{ width: '20%', height: '6px', backgroundColor: colors[1], borderRadius: '1px' }}></div>
            <div style={{ width: '25%', height: '6px', backgroundColor: colors[1], borderRadius: '1px' }}></div>
          </div>
          {/* Table rows */}
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '2px',
              marginBottom: '2px',
              padding: '2px'
            }}>
              <div style={{ width: '30%', height: '6px', backgroundColor: colors[0], borderRadius: '1px' }}></div>
              <div style={{ width: '25%', height: '6px', backgroundColor: colors[0], borderRadius: '1px' }}></div>
              <div style={{ width: '20%', height: '6px', backgroundColor: colors[2], borderRadius: '1px' }}></div>
              <div style={{ width: '25%', height: '6px', backgroundColor: colors[0], borderRadius: '1px' }}></div>
            </div>
          ))}
        </div>
      );
    }

    if (templateType.layout === 'kanban') {
      return (
        <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: colors[0],
          padding: '6px',
          borderRadius: '4px',
          display: 'flex',
          gap: '4px'
        }}>
          {/* Kanban columns */}
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{
              flex: 1,
              backgroundColor: 'white',
              borderRadius: '2px',
              padding: '4px'
            }}>
              <div style={{ width: '100%', height: '6px', backgroundColor: colors[1], borderRadius: '1px', marginBottom: '4px' }}></div>
              <div style={{ width: '100%', height: '12px', backgroundColor: colors[0], borderRadius: '2px', marginBottom: '2px' }}></div>
              <div style={{ width: '100%', height: '12px', backgroundColor: colors[0], borderRadius: '2px', marginBottom: '2px' }}></div>
              {i === 1 && <div style={{ width: '100%', height: '12px', backgroundColor: colors[0], borderRadius: '2px' }}></div>}
            </div>
          ))}
        </div>
      );
    }

    // Default document layout
    return (
      <div style={{
        width: '60%',
        height: '60%',
        backgroundColor: 'white',
        padding: '2px',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
        {/* Document header */}
        <div style={{
          width: '70%',
          height: '8px',
          backgroundColor: colors[1],
          borderRadius: '2px'
        }}></div>
        {/* Document content */}
        <div style={{
          width: '100%',
          height: '4px',
          backgroundColor: colors[0],
          borderRadius: '1px'
        }}></div>
        <div style={{
          width: '85%',
          height: '4px',
          backgroundColor: colors[0],
          borderRadius: '1px'
        }}></div>
        <div style={{
          width: '95%',
          height: '4px',
          backgroundColor: colors[0],
          borderRadius: '1px'
        }}></div>
        <div style={{
          width: '60%',
          height: '4px',
          backgroundColor: colors[0],
          borderRadius: '1px'
        }}></div>
        {/* Document sections */}
        <div style={{
          marginTop: '8px',
          display: 'flex',
          gap: '4px'
        }}>
          <div style={{
            width: '20px',
            height: '16px',
            backgroundColor: colors[1],
            borderRadius: '2px'
          }}></div>
          <div style={{
            width: '20px',
            height: '16px',
            backgroundColor: colors[1],
            borderRadius: '2px'
          }}></div>
        </div>
      </div>
    );
  };

  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      backgroundColor: '#ffffff',
      color: '#1f2937'
    },
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      zIndex: 50,
      paddingBottom: '12px'
    },
    headerContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '12px 24px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px'
    },
    logo: {
      display: 'flex',
      alignItems: 'center'
    },
    logoIcon: {
      width: '32px',
      height: '32px',
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '18px'
    },
    logoText: {
      marginLeft: '8px',
      fontSize: '20px',
      fontWeight: '600'
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px'
    },
    navItem: {
      cursor: 'pointer',
      color: '#374151'
    },
    btnPrimary: {
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    },
    mainContent: {
      paddingTop: '100px',
      minHeight: '100vh',
      backgroundColor: 'white',
      width: '100%',
      position: 'relative'
    },
    container: {
      maxWidth: '1152px',
      margin: '0 auto',
      padding: '32px',
      width: '100%',
      boxSizing: 'border-box'
    },
    title: {
      fontSize: '48px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '16px'
    },
    subtitle: {
      fontSize: '20px',
      color: '#6b7280',
      textAlign: 'center',
      marginBottom: '48px'
    },
    searchContainer: {
      maxWidth: '512px',
      margin: '0 auto 48px',
      position: 'relative'
    },
    searchInput: {
      width: '100%',
      padding: '12px 12px 12px 48px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '16px',
      outline: 'none',
      boxSizing: 'border-box'
    },
    grid: {
      display: 'grid',
      gap: '24px'
    },
    card: {
      backgroundColor: '#f9fafb',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '64px'
    },
    sectionTitle: {
      fontSize: '30px',
      fontWeight: 'bold',
      marginBottom: '32px'
    },
    browseLink: {
      display: 'flex',
      alignItems: 'center',
      color: '#2563eb',
      cursor: 'pointer',
      fontWeight: '500'
    }
  };

  const Header = () => (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>N</div>
            <span style={styles.logoText}>Notion</span>
          </div>
          <nav style={styles.nav}>
            <span style={styles.navItem}>Notion</span>
            <span style={styles.navItem}>Mail</span>
            <span style={{ ...styles.navItem, color: '#2563eb' }}>New</span>
            <span style={styles.navItem}>Calendar</span>
            <span style={styles.navItem}>AI</span>
            <span style={styles.navItem}>Enterprise</span>
            <span style={styles.navItem}>Pricing</span>
            <span style={styles.navItem}>Explore</span>
            <span style={styles.navItem}>Request a demo</span>
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280' }}>
            Log in
          </button>
          <button style={styles.btnPrimary}>Get Notion free</button>
        </div>
      </div>
      
      {/* Three icon buttons below login */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '8px',
        paddingRight: '24px',
        paddingTop: '8px',
        paddingBottom: '4px'
      }}>
        <button 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 14px',
            backgroundColor: '#fff7ed',
            border: '1px solid #fed7aa',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            color: '#ea580c',
            transition: 'all 0.2s ease',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#ffedd5';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            e.currentTarget.style.borderColor = '#fb923c';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#fff7ed';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
            e.currentTarget.style.borderColor = '#fed7aa';
          }}
        >
          <Briefcase style={{ width: '16px', height: '16px' }} />
          Work
        </button>
        
        <button 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 14px',
            backgroundColor: '#f0f9ff',
            border: '1px solid #bae6fd',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            color: '#0284c7',
            transition: 'all 0.2s ease',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e0f2fe';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            e.currentTarget.style.borderColor = '#38bdf8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f0f9ff';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
            e.currentTarget.style.borderColor = '#bae6fd';
          }}
        >
          <GraduationCap style={{ width: '16px', height: '16px' }} />
          School
        </button>
        
        <button 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 14px',
            backgroundColor: '#fdf2f8',
            border: '1px solid #fbcfe8',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            color: '#be185d',
            transition: 'all 0.2s ease',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#fce7f3';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            e.currentTarget.style.borderColor = '#f472b6';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#fdf2f8';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
            e.currentTarget.style.borderColor = '#fbcfe8';
          }}
        >
          <Heart style={{ width: '16px', height: '16px' }} />
          Life
        </button>
      </div>
    </header>
  );

  const DiscoverSection = () => (
    <div style={{ marginBottom: '64px' }}>
      <h1 style={styles.title}>Discover</h1>
      <p style={styles.subtitle}>
        Find all the best templates and set-ups built by Notion's community
      </p>

      <div style={styles.searchContainer}>
        <Search 
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#9ca3af',
            width: '20px',
            height: '20px',
            transition: 'color 0.3s ease'
          }} 
        />
        <input
          type="text"
          placeholder="Search 30,000+ templates"
          style={{
            ...styles.searchInput,
            transition: 'all 0.3s ease'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#2563eb';
            e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
            e.target.style.transform = 'scale(1.02)';
            e.target.previousElementSibling.style.color = '#2563eb';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#d1d5db';
            e.target.style.boxShadow = 'none';
            e.target.style.transform = 'scale(1)';
            e.target.previousElementSibling.style.color = '#9ca3af';
          }}
        />
      </div>

      {/* Annual Planning Card */}
      <div style={{
        ...styles.card,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '14px', color: '#2563eb', marginBottom: '8px' }}>
            🗓️ Annual Planning
          </div>
          <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '16px' }}>
            Your mid-year reset
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '16px' }}>
            Reflect on your personal growth so far in 2025 and get<br />
            ready to make even more progress by 2026.
          </p>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '128px',
            height: '80px',
            backgroundColor: '#3b82f6',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px'
          }}>
            📊
          </div>
        </div>
        <div style={{ flex: 1, textAlign: 'right' }}>
          <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>
            🎯 Top creator
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Marie Poulin</h3>
          <p style={{ color: '#6b7280' }}>Digital systems strategist and tamer of digital chaos</p>
        </div>
      </div>

      {/* Categories Grid */}
      <div style={{
        ...styles.grid,
        gridTemplateColumns: 'repeat(6, 1fr)'
      }}>
        {[
          { icon: '🏢', label: 'Company Mission / Vision', count: '23 templates' },
          { icon: '💰', label: 'Financial Services', count: '167 templates' },
          { icon: '🎓', label: 'Back to school', count: '673 templates' },
          { icon: '📚', label: 'Student Planner', count: '1,542 templates' },
          { icon: '✅', label: 'JIRA', count: '5 templates' },
          { icon: '📍', label: 'Product Roadmap', count: '152 templates' }
        ].map((category, index) => (
          <div 
            key={index} 
            style={{ 
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              borderRadius: '12px',
              padding: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
              e.currentTarget.style.backgroundColor = '#f8fafc';
              const icon = e.currentTarget.querySelector('.category-icon');
              if (icon) {
                icon.style.backgroundColor = '#e0e7ff';
                icon.style.borderColor = '#c7d2fe';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.backgroundColor = 'transparent';
              const icon = e.currentTarget.querySelector('.category-icon');
              if (icon) {
                icon.style.backgroundColor = '#f3f4f6';
                icon.style.borderColor = 'transparent';
              }
            }}
          >
            <div 
              className="category-icon"
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#f3f4f6',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                margin: '0 auto 12px',
                transition: 'all 0.3s ease',
                border: '1px solid transparent'
              }}
            >
              {category.icon}
            </div>
            <h3 style={{ fontWeight: '600', marginBottom: '4px' }}>{category.label}</h3>
            <p style={{ fontSize: '14px', color: '#9ca3af' }}>{category.count}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const FeaturedCreators = () => {
    const creators = [
      {
        name: "Meighan O'Toole",
        description: "My custom-built systems are designed to significantly reduce the time you spend managing your...",
        templates: "2 templates",
        avatar: "👩‍💼"
      },
      {
        name: "ST | HAY studio", 
        description: "HAY! My name is ST and I'm a content creator from Singapore. HAY studio is where I create and curate...",
        templates: "5 templates",
        avatar: "👨‍🎨"
      },
      {
        name: "Home From College",
        description: "Home From College is a career-building platform designed to create the stepping-stones into profession...",
        templates: "6 templates", 
        avatar: "🏠"
      },
      {
        name: "Miray Berber",
        description: "Product Designer, driven by meaningful work — Just like the products I create, Notion reflects m...",
        templates: "3 templates",
        avatar: "👩‍💼"
      }
    ];

    return (
      <div style={{ marginBottom: '64px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
          <h2 style={styles.sectionTitle}>Featured creators</h2>
          <div style={styles.browseLink}>
            <span>Browse 13,858 creators</span>
            <ArrowRight style={{ width: '20px', height: '20px', marginLeft: '4px' }} />
          </div>
        </div>
        <p style={{ color: '#6b7280', marginBottom: '32px' }}>Meet our top template creators</p>

        <div style={{
          ...styles.grid,
          gridTemplateColumns: 'repeat(4, 1fr)'
        }}>
          {creators.map((creator, index) => (
            <div 
              key={index} 
              style={{
                ...styles.card,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                borderRadius: '12px',
                border: '1px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.backgroundColor = '#fefefe';
                e.currentTarget.style.borderColor = '#e0e7ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = '#f9fafb';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  marginRight: '12px',
                  transition: 'all 0.3s ease'
                }}>
                  {creator.avatar}
                </div>
                <h3 style={{ fontWeight: '600', transition: 'color 0.3s ease' }}>{creator.name}</h3>
              </div>
              
              {/* Creator template preview */}
              <div style={{
                height: '120px',
                backgroundColor: 'white',
                borderRadius: '8px',
                marginBottom: '16px',
                border: '1px solid #e5e7eb',
                padding: '8px',
                transition: 'all 0.3s ease'
              }}>
                {createTemplateMockup(index + 20, getTemplateType(index + 6))}
              </div>
              
              <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
                {creator.description}
              </p>
              <p style={{ fontSize: '14px', color: '#9ca3af' }}>{creator.templates}</p>
            </div>
          ))}
        </div>

        {/* Become a creator section */}
        <div 
          style={{
            ...styles.card,
            marginTop: '32px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '1px solid transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            e.currentTarget.style.backgroundColor = '#fefefe';
            e.currentTarget.style.borderColor = '#d1d5db';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.backgroundColor = '#f9fafb';
            e.currentTarget.style.borderColor = 'transparent';
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ 
              width: '96px', 
              height: '96px', 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '16px',
              border: '1px solid #e5e7eb',
              padding: '8px',
              transition: 'all 0.3s ease'
            }}>
              {createTemplateMockup(200, 'dashboard')}
            </div>
          </div>
          <div style={{ flex: 2 }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Become a creator</h2>
            <p style={{ color: '#6b7280' }}>
              Submit your template to the Notion template gallery, get<br />
              featured, and even get paid – all in just a few clicks.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const TopCategories = () => {
    const categories = [
      { name: 'Seasonal', count: '4,847 templates', icon: '❄️' },
      { name: 'Nutrition', count: '99 templates', icon: '🥗' },
      { name: 'Travel', count: '1,037 templates', icon: '✈️' },
      { name: 'Monthly Planner', count: '251 templates', icon: '📅' },
      { name: 'Company Goals', count: '140 templates', icon: '🎯' },
      { name: 'Student Planner', count: '1,542 templates', icon: '🎓' },
      { name: 'Job Search', count: '1,083 templates', icon: '💼' },
      { name: 'Hobbies', count: '2,810 templates', icon: '🎨' }
    ];

    return (
      <div style={{ marginBottom: '64px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
          <h2 style={styles.sectionTitle}>Top categories</h2>
          <div style={styles.browseLink}>
            <span>Browse 271 categories</span>
            <ArrowRight style={{ width: '20px', height: '20px', marginLeft: '4px' }} />
          </div>
        </div>
        <p style={{ color: '#6b7280', marginBottom: '32px' }}>Discover new ways to use Notion</p>

        <div style={{
          ...styles.grid,
          gridTemplateColumns: 'repeat(4, 1fr)'
        }}>
          {categories.map((category, index) => (
            <div 
              key={index} 
              style={{ 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderRadius: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 25px 30px -12px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                e.currentTarget.querySelector('.category-card').style.backgroundColor = '#eef2ff';
                e.currentTarget.querySelector('.category-card').style.borderColor = '#c7d2fe';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.querySelector('.category-card').style.backgroundColor = '#f3f4f6';
                e.currentTarget.querySelector('.category-card').style.borderColor = 'transparent';
              }}
            >
              <div 
                className="category-card"
                style={{
                  backgroundColor: '#f3f4f6',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '16px',
                  border: '1px solid transparent',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '24px', marginRight: '12px' }}>{category.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: '600' }}>{category.name}</h3>
                    <p style={{ fontSize: '14px', color: '#9ca3af' }}>{category.count}</p>
                  </div>
                </div>
                <div style={{
                  height: '128px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  padding: '8px',
                  transition: 'all 0.3s ease'
                }}>
                  {createTemplateMockup(index + 10, getTemplateType(index + 3))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const FeaturedCollections = () => (
    <div style={{ marginBottom: '64px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
        <h2 style={styles.sectionTitle}>Featured collections</h2>
        <div style={styles.browseLink}>
          <span>Browse 2,007 collections</span>
          <ArrowRight style={{ width: '20px', height: '20px', marginLeft: '4px' }} />
        </div>
      </div>
      <p style={{ color: '#6b7280', marginBottom: '32px' }}>Templates that work well together</p>

      <div style={{
        ...styles.grid,
        gridTemplateColumns: 'repeat(2, 1fr)'
      }}>
        <div 
          style={{
            backgroundColor: '#fffbeb',
            borderRadius: '12px',
            padding: '32px',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            border: '1px solid transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(251, 191, 36, 0.25), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            e.currentTarget.style.backgroundColor = '#fefce8';
            e.currentTarget.style.borderColor = '#fde047';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.backgroundColor = '#fffbeb';
            e.currentTarget.style.borderColor = 'transparent';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '24px', marginRight: '12px' }}>💰</span>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>Investing</span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
            Track your wealth, your way
          </h3>
          <p style={{ color: '#6b7280', marginBottom: '24px' }}>
            Take control of your investments, with these templates for managing and planning your portfolio.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '200px',
              height: '120px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              padding: '12px',
              transition: 'all 0.3s ease'
            }}>
              {createTemplateMockup(100, 'dashboard')}
            </div>
          </div>
        </div>

        <div 
          style={{
            backgroundColor: '#fff7ed',
            borderRadius: '12px',
            padding: '32px',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            border: '1px solid transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(249, 115, 22, 0.25), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            e.currentTarget.style.backgroundColor = '#fef2f2';
            e.currentTarget.style.borderColor = '#fed7aa';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.backgroundColor = '#fff7ed';
            e.currentTarget.style.borderColor = 'transparent';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '24px', marginRight: '12px' }}>🐕</span>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>Pets</span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
            Pets are people too
          </h3>
          <p style={{ color: '#6b7280', marginBottom: '24px' }}>
            Pet parenting made easy, with Notion. New pet care level unlocked.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '200px',
              height: '120px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              padding: '12px',
              transition: 'all 0.3s ease'
            }}>
              {createTemplateMockup(101, 'tracker')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const FeaturedTemplates = () => {
    const templates = [
      { title: "Elevate - Personal Relationships Management", author: "Julius T. Geiger", price: "Free" },
      { title: "Weight Loss Tracker - Body Transformation", author: "Harrison", price: "Free" },
      { title: "Mental health journal", author: "Notionist", price: "Free" },
      { title: "Writing a Book [template]", author: "Author", price: "Free" },
      { title: "Pet Care Hub", author: "Pet Lover", price: "Free" },
      { title: "Sprint Tracker", author: "Agile Master", price: "Free" }
    ];

    return (
      <div style={{ marginBottom: '64px' }}>
        <h2 style={styles.sectionTitle}>Featured templates</h2>
        <p style={{ color: '#6b7280', marginBottom: '32px' }}>Handpicked by our editorial team</p>

        <div style={{
          ...styles.grid,
          gridTemplateColumns: 'repeat(3, 1fr)'
        }}>
          {templates.map((template, index) => (
            <div 
              key={index} 
              style={{ 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderRadius: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                backgroundColor: '#f8fafc',
                borderRadius: '12px',
                marginBottom: '16px',
                height: '192px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                padding: '12px',
                transition: 'all 0.3s ease'
              }}>
                {createTemplateMockup(index, getTemplateType(index))}
              </div>
              <h3 style={{ fontWeight: '600', marginBottom: '4px', transition: 'color 0.3s ease' }}>{template.title}</h3>
              <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '4px' }}>{template.author}</p>
              <p style={{ fontSize: '14px', fontWeight: '600', color: '#059669' }}>{template.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const Footer = () => (
    <footer style={{
      backgroundColor: 'white',
      borderTop: '1px solid #e5e7eb',
      marginTop: '64px'
    }}>
      <div style={{
        maxWidth: '1152px',
        margin: '0 auto',
        padding: '48px 32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '32px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
            <div style={styles.logoIcon}>N</div>
            <span style={styles.logoText}>Notion</span>
          </div>
          <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
            We do not sell or share your personal information
          </p>
          <p style={{ fontSize: '14px', color: '#9ca3af' }}>© 2025 Notion Labs, Inc.</p>
        </div>

        <div>
          <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Company</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['About us', 'Careers', 'Security', 'Status', 'Terms & privacy', 'Your privacy rights'].map((item, i) => (
              <span key={i} style={{ fontSize: '14px', color: '#6b7280', cursor: 'pointer' }}>{item}</span>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Download</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['iOS & Android', 'Mac & Windows', 'Calendar', 'Web Clipper'].map((item, i) => (
              <span key={i} style={{ fontSize: '14px', color: '#6b7280', cursor: 'pointer' }}>{item}</span>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Resources</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Help center', 'Pricing', 'Blog', 'Community', 'Integrations', 'Templates', 'Affiliates'].map((item, i) => (
              <span key={i} style={{ fontSize: '14px', color: '#6b7280', cursor: 'pointer' }}>{item}</span>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Notion for</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Enterprise', 'Small business', 'Personal'].map((item, i) => (
              <span key={i} style={{ fontSize: '14px', color: '#6b7280', cursor: 'pointer' }}>{item}</span>
            ))}
          </div>
          <div style={{ marginTop: '24px' }}>
            <div style={styles.browseLink}>
              <span>Explore more</span>
              <ArrowRight style={{ width: '16px', height: '16px', marginLeft: '4px' }} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div style={styles.body}>
      <Header />
      <div style={styles.mainContent}>
        <div style={styles.container}>
          <DiscoverSection />
          <FeaturedTemplates />
          <FeaturedCollections />
          <TopCategories />
          <FeaturedCreators />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;